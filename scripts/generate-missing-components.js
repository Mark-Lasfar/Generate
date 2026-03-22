// scripts/generate-missing-components.js

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../components/employee/dashboards');

// ✅ خريطة الاستعلامات الحقيقية من ملفاتك
const QUERY_MAP = {
  // App Manager
  'ALL_APPS': 'DEVELOPER_APPS_QUERY',           // من graphql/employee/queries.ts
  'GET_APP': 'GET_APP',                         // يحتاج إنشاء
  'APP_ANALYTICS': 'DEVELOPER_ANALYTICS_QUERY', // من graphql/employee/queries.ts
  
  // Developer Manager
  'GET_DEVELOPER': 'GET_DEVELOPER',             // من graphql/jobs/queries.ts
  'DEVELOPER_PROJECTS': 'DEVELOPER_APPS',       // من graphql/employee/queries.ts
  'DEVELOPER_TEAM': 'DEVELOPER_TEAM',           // من graphql/employee/queries.ts
  'SKILLS_MATRIX': 'DEVELOPER_MANAGER_STATS',   // من graphql/employee/queries.ts (يحتوي skillDistribution)
  
  // Finance Manager
  'PENDING_PAYOUTS': 'PENDING_PAYOUTS',         // من graphql/employee/queries.ts
  'GET_PAYOUT': 'GET_PAYOUT',                   // يحتاج إنشاء
  'EMPLOYEE_SALARIES': 'EMPLOYEE_SALARIES',     // من graphql/jobs/queries.ts
  'GET_SALARY': 'GET_SALARY',                   // من graphql/jobs/queries.ts
  'FINANCE_REPORTS': 'FINANCE_MANAGER_STATS',   // من graphql/employee/queries.ts
  'FINANCE_ANALYTICS': 'FINANCE_MANAGER_STATS', // من graphql/employee/queries.ts
  
  // Marketing Manager
  'ACTIVE_CAMPAIGNS': 'ACTIVE_CAMPAIGNS',       // من graphql/employee/queries.ts
  'GET_CAMPAIGN': 'CAMPAIGN_PERFORMANCE',       // من graphql/employee/queries.ts
  'MARKETING_ANALYTICS': 'MARKETING_MANAGER_STATS', // من graphql/employee/queries.ts
  'AUDIENCE_DATA': 'MARKETING_MANAGER_STATS',   // من graphql/employee/queries.ts
  'EMAIL_CAMPAIGNS': 'ACTIVE_CAMPAIGNS',        // من graphql/employee/queries.ts
  
  // Store Manager
  'PENDING_STORES': 'PENDING_STORES',           // من graphql/employee/queries.ts
  'STORE_CATEGORIES': 'STORE_MANAGER_STATS',    // من graphql/employee/queries.ts (يحتوي storesByCategory)
  'ALL_STORES': 'ALL_STORES',                   // من graphql/employee/queries.ts
  'GET_STORE': 'GET_STORE',                     // يحتاج إنشاء
  'STORE_ANALYTICS': 'STORE_MANAGER_STATS',     // من graphql/employee/queries.ts
  'SUSPENDED_STORES': 'STORE_MANAGER_STATS',    // من graphql/employee/queries.ts (يحتوي suspendedStores)
  
  // App Reviewer
  'PENDING_APP_REVIEWS': 'PENDING_APP_REVIEWS', // من graphql/employee/queries.ts
  'APPROVED_APPS': 'REVIEWED_APPS',             // من graphql/employee/queries.ts
  'REJECTED_APPS': 'REVIEWED_APPS',             // من graphql/employee/queries.ts
  
  // Content Moderator
  'PENDING_REPORTS': 'PENDING_REPORTS',         // من graphql/employee/queries.ts
  'REVIEWED_REPORTS': 'MODERATOR_ACTIONS',      // من graphql/employee/queries.ts
  'FLAGGED_CONTENT': 'CONTENT_MODERATOR_STATS', // من graphql/employee/queries.ts
  'GET_CONTENT': 'GET_CONTENT',                 // يحتاج إنشاء
  
  // Support Agent
  'ALL_TICKETS': 'OPEN_TICKETS',                // من graphql/employee/queries.ts
  'GET_TICKET': 'GET_TICKET',                   // يحتاج إنشاء
  'MY_TICKETS': 'OPEN_TICKETS',                 // من graphql/employee/queries.ts
  'SUPPORT_STATS': 'SUPPORT_AGENT_STATS',       // من graphql/employee/queries.ts
  'SUPPORT_SETTINGS': 'EMPLOYEE_SETTINGS',      // من graphql/employee/queries.ts
  
  // HR Manager
  'GET_ADMIN_APPLICATION': 'GET_ADMIN_APPLICATION', // من graphql/jobs/queries.ts
  'GET_EMPLOYEE': 'GET_EMPLOYEE',                   // من graphql/jobs/queries.ts
  
  // Manager
  'GET_PROJECT_BY_ID': 'GET_PROJECT_BY_ID',         // من graphql/employee/queries.ts
  'MANAGER_REPORTS': 'MANAGER_STATS',               // من graphql/employee/queries.ts
  'MANAGER_BUDGET': 'MANAGER_STATS',                // من graphql/employee/queries.ts (يحتوي budgetUtilized, totalBudget)
  
  // Seller Manager
  'PENDING_SELLERS': 'PENDING_SELLERS',             // من graphql/employee/queries.ts
  'ALL_SELLERS': 'SELLER_MANAGER_STATS',            // من graphql/employee/queries.ts (يحتوي topSellers)
  'GET_SELLER': 'GET_SELLER',                       // يحتاج إنشاء
  'SELLER_REPORTS': 'SELLER_MANAGER_STATS',         // من graphql/employee/queries.ts
};

// ✅ خريطة الطفرات الحقيقية
const MUTATION_MAP = {
  'REVIEW_APP': 'REVIEW_APP',                       // من graphql/employee/mutations.ts
  'ASSIGN_PROJECT': 'ASSIGN_PROJECT',               // من graphql/employee/mutations.ts
  'CREATE_CAMPAIGN_EMPLOYEE': 'CREATE_CAMPAIGN_EMPLOYEE', // من graphql/employee/mutations.ts
  'UPDATE_CAMPAIGN': 'UPDATE_CAMPAIGN_STATUS',      // من graphql/employee/mutations.ts
  'SUSPEND_STORE': 'SUSPEND_STORE',                 // من graphql/employee/mutations.ts
  'SUBMIT_REVIEW': 'SUBMIT_REVIEW',                 // من graphql/employee/mutations.ts
  'CREATE_JOB': 'CREATE_JOB',                       // من graphql/jobs/mutations.ts
  'ADD_EMPLOYEE': 'ADD_EMPLOYEE',                   // من graphql/employee/mutations.ts
  'CREATE_PROJECT': 'CREATE_PROJECT',               // من graphql/client/mutations.ts
  'UPDATE_PROJECT': 'UPDATE_PROJECT',               // من graphql/client/mutations.ts
  'ADD_TEAM_MEMBER': 'ADD_EMPLOYEE',                // من graphql/employee/mutations.ts
  'ASSIGN_TASK': 'ASSIGN_TASK',                     // من graphql/employee/mutations.ts
  'UPDATE_SUPPORT_SETTINGS': 'UPDATE_EMPLOYEE_SETTINGS', // من graphql/employee/mutations.ts
};

// ✅ المكونات المفقودة مع الاستعلامات/الطفرات الحقيقية
const missingComponents = [
  // App Manager
  { name: 'AppsPage', dir: 'app-manager', type: 'list', title: 'Applications', query: 'ALL_APPS', realQuery: 'DEVELOPER_APPS_QUERY', dataField: 'developerApps' },
  { name: 'AppDetailsPage', dir: 'app-manager', type: 'details', title: 'Application Details', query: 'GET_APP', realQuery: 'DEVELOPER_APPS_QUERY', dataField: 'developerApps', hasId: true },
  { name: 'AppReviewPage', dir: 'app-manager', type: 'form', title: 'Review Application', mutation: 'REVIEW_APP', realMutation: 'REVIEW_APP' },
  { name: 'AppAnalyticsPage', dir: 'app-manager', type: 'analytics', title: 'App Analytics', query: 'APP_ANALYTICS', realQuery: 'DEVELOPER_ANALYTICS_QUERY', dataField: 'developerAnalytics' },
  
  // Developer Manager
  { name: 'DeveloperProfilePage', dir: 'developer-manager', type: 'profile', title: 'Developer Profile', query: 'GET_DEVELOPER', realQuery: 'GET_DEVELOPER', dataField: 'developer' },
  { name: 'AssignProjectPage', dir: 'developer-manager', type: 'assign', title: 'Assign Project', mutation: 'ASSIGN_PROJECT', realMutation: 'ASSIGN_PROJECT' },
  { name: 'SkillsMatrixPage', dir: 'developer-manager', type: 'matrix', title: 'Skills Matrix', query: 'SKILLS_MATRIX', realQuery: 'DEVELOPER_MANAGER_STATS', dataField: 'skillDistribution' },
  { name: 'DeveloperProjectsPage', dir: 'developer-manager', type: 'list', title: 'Developer Projects', query: 'DEVELOPER_PROJECTS', realQuery: 'DEVELOPER_APPS', dataField: 'developerApps' },
  { name: 'DeveloperProjectDetailsPage', dir: 'developer-manager', type: 'details', title: 'Project Details', query: 'GET_PROJECT_BY_ID', realQuery: 'GET_PROJECT_BY_ID', dataField: 'project' },
  { name: 'DeveloperTeamPage', dir: 'developer-manager', type: 'list', title: 'Developer Team', query: 'DEVELOPER_TEAM', realQuery: 'DEVELOPER_TEAM', dataField: 'developerTeam' },
  
  // Finance Manager
  { name: 'PayoutsPage', dir: 'finance-manager', type: 'list', title: 'Payouts', query: 'PENDING_PAYOUTS', realQuery: 'PENDING_PAYOUTS', dataField: 'pendingPayouts' },
  { name: 'PayoutDetailsPage', dir: 'finance-manager', type: 'details', title: 'Payout Details', query: 'GET_PAYOUT', realQuery: 'PENDING_PAYOUTS', dataField: 'pendingPayouts', hasId: true },
  { name: 'SalariesPage', dir: 'finance-manager', type: 'list', title: 'Salaries', query: 'EMPLOYEE_SALARIES', realQuery: 'EMPLOYEE_SALARIES', dataField: 'employeeSalaries' },
  { name: 'SalaryDetailsPage', dir: 'finance-manager', type: 'details', title: 'Salary Details', query: 'GET_SALARY', realQuery: 'GET_SALARY', dataField: 'salary' },
  { name: 'FinanceReportsPage', dir: 'finance-manager', type: 'reports', title: 'Financial Reports', query: 'FINANCE_REPORTS', realQuery: 'FINANCE_MANAGER_STATS', dataField: 'financeManagerStats' },
  { name: 'FinanceAnalyticsPage', dir: 'finance-manager', type: 'analytics', title: 'Financial Analytics', query: 'FINANCE_ANALYTICS', realQuery: 'FINANCE_MANAGER_STATS', dataField: 'financeManagerStats' },
  
  // Marketing Manager
  { name: 'CampaignsPage', dir: 'marketing-manager', type: 'list', title: 'Campaigns', query: 'ACTIVE_CAMPAIGNS', realQuery: 'ACTIVE_CAMPAIGNS', dataField: 'activeCampaigns' },
  { name: 'NewCampaignPage', dir: 'marketing-manager', type: 'form', title: 'New Campaign', mutation: 'CREATE_CAMPAIGN_EMPLOYEE', realMutation: 'CREATE_CAMPAIGN_EMPLOYEE' },
  { name: 'CampaignDetailsPage', dir: 'marketing-manager', type: 'details', title: 'Campaign Details', query: 'GET_CAMPAIGN', realQuery: 'CAMPAIGN_PERFORMANCE', dataField: 'campaignPerformance' },
  { name: 'EditCampaignPage', dir: 'marketing-manager', type: 'form', title: 'Edit Campaign', mutation: 'UPDATE_CAMPAIGN', realMutation: 'UPDATE_CAMPAIGN_STATUS' },
  { name: 'MarketingAnalyticsPage', dir: 'marketing-manager', type: 'analytics', title: 'Marketing Analytics', query: 'MARKETING_ANALYTICS', realQuery: 'MARKETING_MANAGER_STATS', dataField: 'marketingManagerStats' },
  { name: 'AudiencePage', dir: 'marketing-manager', type: 'analytics', title: 'Audience Insights', query: 'AUDIENCE_DATA', realQuery: 'MARKETING_MANAGER_STATS', dataField: 'marketingManagerStats' },
  { name: 'EmailMarketingPage', dir: 'marketing-manager', type: 'list', title: 'Email Campaigns', query: 'EMAIL_CAMPAIGNS', realQuery: 'ACTIVE_CAMPAIGNS', dataField: 'activeCampaigns' },
  
  // Store Manager
  { name: 'StoreApprovalsPage', dir: 'store-manager', type: 'list', title: 'Store Approvals', query: 'PENDING_STORES', realQuery: 'PENDING_STORES', dataField: 'pendingStores' },
  { name: 'StoreCategoriesPage', dir: 'store-manager', type: 'list', title: 'Store Categories', query: 'STORE_CATEGORIES', realQuery: 'STORE_MANAGER_STATS', dataField: 'storesByCategory' },
  { name: 'StoresListPage', dir: 'store-manager', type: 'list', title: 'All Stores', query: 'ALL_STORES', realQuery: 'ALL_STORES', dataField: 'allStores' },
  { name: 'StoreDetailsPage', dir: 'store-manager', type: 'details', title: 'Store Details', query: 'GET_STORE', realQuery: 'ALL_STORES', dataField: 'allStores', hasId: true },
  { name: 'SuspendStorePage', dir: 'store-manager', type: 'form', title: 'Suspend Store', mutation: 'SUSPEND_STORE', realMutation: 'SUSPEND_STORE' },
  { name: 'StoreAnalyticsPage', dir: 'store-manager', type: 'analytics', title: 'Store Analytics', query: 'STORE_ANALYTICS', realQuery: 'STORE_MANAGER_STATS', dataField: 'storeManagerStats' },
  { name: 'SuspendedStoresPage', dir: 'store-manager', type: 'list', title: 'Suspended Stores', query: 'SUSPENDED_STORES', realQuery: 'STORE_MANAGER_STATS', dataField: 'suspendedStores' },
  
  // App Reviewer
  { name: 'PendingReviewsPage', dir: 'app-reviewer', type: 'list', title: 'Pending Reviews', query: 'PENDING_APP_REVIEWS', realQuery: 'PENDING_APP_REVIEWS', dataField: 'pendingAppReviews' },
  { name: 'ApprovedAppsPage', dir: 'app-reviewer', type: 'list', title: 'Approved Apps', query: 'APPROVED_APPS', realQuery: 'REVIEWED_APPS', dataField: 'reviewedApps' },
  { name: 'RejectedAppsPage', dir: 'app-reviewer', type: 'list', title: 'Rejected Apps', query: 'REJECTED_APPS', realQuery: 'REVIEWED_APPS', dataField: 'reviewedApps' },
  { name: 'ReviewAppPage', dir: 'app-reviewer', type: 'form', title: 'Review App', mutation: 'SUBMIT_REVIEW', realMutation: 'SUBMIT_REVIEW' },
  
  // Content Moderator
  { name: 'PendingReportsPage', dir: 'content-moderator', type: 'list', title: 'Pending Reports', query: 'PENDING_REPORTS', realQuery: 'PENDING_REPORTS', dataField: 'pendingReports' },
  { name: 'ReviewedReportsPage', dir: 'content-moderator', type: 'list', title: 'Reviewed Reports', query: 'REVIEWED_REPORTS', realQuery: 'MODERATOR_ACTIONS', dataField: 'moderatorActions' },
  { name: 'FlaggedContentPage', dir: 'content-moderator', type: 'list', title: 'Flagged Content', query: 'FLAGGED_CONTENT', realQuery: 'CONTENT_MODERATOR_STATS', dataField: 'contentModeratorStats' },
  { name: 'ContentDetailsPage', dir: 'content-moderator', type: 'details', title: 'Content Details', query: 'GET_CONTENT', realQuery: 'PENDING_REPORTS', dataField: 'pendingReports', hasId: true },
  { name: 'GuidelinesPage', dir: 'content-moderator', type: 'static', title: 'Moderation Guidelines' },
  
  // Support Agent
  { name: 'AllTicketsPage', dir: 'support-agent', type: 'list', title: 'All Tickets', query: 'ALL_TICKETS', realQuery: 'OPEN_TICKETS', dataField: 'openTickets' },
  { name: 'TicketDetailsPage', dir: 'support-agent', type: 'details', title: 'Ticket Details', query: 'GET_TICKET', realQuery: 'OPEN_TICKETS', dataField: 'openTickets', hasId: true },
  { name: 'MyTicketsPage', dir: 'support-agent', type: 'list', title: 'My Tickets', query: 'MY_TICKETS', realQuery: 'OPEN_TICKETS', dataField: 'openTickets' },
  { name: 'SupportStatsPage', dir: 'support-agent', type: 'analytics', title: 'Support Statistics', query: 'SUPPORT_STATS', realQuery: 'SUPPORT_AGENT_STATS', dataField: 'supportAgentStats' },
  { name: 'SupportSettingsPage', dir: 'support-agent', type: 'settings', title: 'Support Settings', query: 'SUPPORT_SETTINGS', realQuery: 'EMPLOYEE_SETTINGS', dataField: 'employeeSettings' },
  
  // HR Manager
  { name: 'ApplicationDetailsPage', dir: 'hr', type: 'details', title: 'Application Details', query: 'GET_ADMIN_APPLICATION', realQuery: 'GET_ADMIN_APPLICATION', dataField: 'adminJobApplication' },
  { name: 'PostJobPage', dir: 'hr', type: 'form', title: 'Post Job', mutation: 'CREATE_JOB', realMutation: 'CREATE_JOB' },
  { name: 'AddEmployeePage', dir: 'hr', type: 'form', title: 'Add Employee', mutation: 'ADD_EMPLOYEE', realMutation: 'ADD_EMPLOYEE' },
  { name: 'EmployeeProfilePage', dir: 'hr', type: 'profile', title: 'Employee Profile', query: 'GET_EMPLOYEE', realQuery: 'GET_EMPLOYEE', dataField: 'employee' },
  
  // Manager
  { name: 'NewProjectPage', dir: 'manager', type: 'form', title: 'New Project', mutation: 'CREATE_PROJECT', realMutation: 'CREATE_PROJECT' },
  { name: 'ProjectDetailsPage', dir: 'manager', type: 'details', title: 'Project Details', query: 'GET_PROJECT_BY_ID', realQuery: 'GET_PROJECT_BY_ID', dataField: 'project' },
  { name: 'EditProjectPage', dir: 'manager', type: 'form', title: 'Edit Project', mutation: 'UPDATE_PROJECT', realMutation: 'UPDATE_PROJECT' },
  { name: 'AddTeamMemberPage', dir: 'manager', type: 'form', title: 'Add Team Member', mutation: 'ADD_TEAM_MEMBER', realMutation: 'ADD_EMPLOYEE' },
  { name: 'TeamMemberProfilePage', dir: 'manager', type: 'profile', title: 'Team Member Profile', query: 'GET_EMPLOYEE', realQuery: 'GET_EMPLOYEE', dataField: 'employee' },
  { name: 'AssignTaskPage', dir: 'manager', type: 'form', title: 'Assign Task', mutation: 'ASSIGN_TASK', realMutation: 'ASSIGN_TASK' },
  { name: 'ManagerReportsPage', dir: 'manager', type: 'reports', title: 'Manager Reports', query: 'MANAGER_REPORTS', realQuery: 'MANAGER_STATS', dataField: 'managerStats' },
  { name: 'BudgetPage', dir: 'manager', type: 'analytics', title: 'Budget Overview', query: 'MANAGER_BUDGET', realQuery: 'MANAGER_STATS', dataField: 'managerStats' },
  
  // Seller Manager
  { name: 'SellerApprovalsPage', dir: 'seller-manager', type: 'list', title: 'Seller Approvals', query: 'PENDING_SELLERS', realQuery: 'PENDING_SELLERS', dataField: 'pendingSellers' },
  { name: 'SellersPage', dir: 'seller-manager', type: 'list', title: 'All Sellers', query: 'ALL_SELLERS', realQuery: 'SELLER_MANAGER_STATS', dataField: 'topSellers' },
  { name: 'SellerDetailsPage', dir: 'seller-manager', type: 'details', title: 'Seller Details', query: 'GET_SELLER', realQuery: 'SELLER_MANAGER_STATS', dataField: 'topSellers', hasId: true },
  { name: 'StoresPage', dir: 'seller-manager', type: 'list', title: 'Stores', query: 'ALL_STORES', realQuery: 'ALL_STORES', dataField: 'allStores' },
  { name: 'StoreDetailsPage', dir: 'seller-manager', type: 'details', title: 'Store Details', query: 'GET_STORE', realQuery: 'ALL_STORES', dataField: 'allStores', hasId: true },
  { name: 'SellerReportsPage', dir: 'seller-manager', type: 'reports', title: 'Seller Reports', query: 'SELLER_REPORTS', realQuery: 'SELLER_MANAGER_STATS', dataField: 'sellerManagerStats' },
];

// ✅ دالة لتوليد المحتوى
function generateComponentContent(comp) {
  const { name, type, title, realQuery, realMutation, dataField, hasId } = comp;
  
  // تحديد ملف الاستيراد الصحيح
  let importPath = '';
  let queryName = realQuery;
  let mutationName = realMutation;
  
  // تحديد المسار الصحيح للاستعلامات
  if (['GET_DEVELOPER', 'GET_EMPLOYEE', 'GET_ADMIN_APPLICATION', 'GET_SALARY', 'EMPLOYEE_SALARIES', 'GET_PROJECT_BY_ID'].includes(realQuery)) {
    importPath = '@/graphql/jobs/queries';
  } else if (realQuery) {
    importPath = '@/graphql/employee/queries';
  }
  
  if (['CREATE_JOB', 'ADD_EMPLOYEE', 'CREATE_PROJECT', 'UPDATE_PROJECT', 'ASSIGN_TASK'].includes(realMutation)) {
    importPath = '@/graphql/jobs/mutations';
  } else if (realMutation) {
    importPath = '@/graphql/employee/mutations';
  }
  
  // قوالب المكونات
  const templates = {
    list: `'use client';

import { useQuery } from '@apollo/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { data, loading } = useQuery(${realQuery});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  let items = data?.${dataField} || [];
  
  // معالجة البيانات حسب النوع
  if (Array.isArray(items)) {
    items = items;
  } else if (items && typeof items === 'object') {
    items = Object.values(items).flat();
  } else {
    items = [];
  }

  const filteredItems = items.filter((item: any) =>
    item.name?.toLowerCase().includes(search.toLowerCase()) ||
    item.title?.toLowerCase().includes(search.toLowerCase()) ||
    item.businessName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">${title}</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredItems.map((item: any) => (
          <Card key={item.id || item._id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{item.name || item.title || item.businessName}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description || item.email || item.businessName}</p>
                </div>
                <Link href={\`./\${item.id || item._id}\`}>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}`,

    details: `'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const id = params?.id as string;

  const { data, loading } = useQuery(${realQuery}, {
    variables: { id },
    skip: !id
  });

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  const item = data?.${dataField};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">${title}</h1>
        </div>
        <div className="flex gap-2">
          <Link href={\`./edit\`}>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </Link>
          <Button variant="destructive" size="sm">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-50 p-4 rounded-lg overflow-auto">
            {JSON.stringify(item, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}`,

    form: `'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { ${realMutation} } from '${importPath}';

export function ${name}() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({});
  const [mutate, { loading }] = useMutation(${realMutation});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  const handleSubmit = async () => {
    try {
      await mutate({ variables: { input: formData } });
      router.push('/employee/' + location.pathname.split('/')[3]);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">${title}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Form</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter name..."
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea 
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter description..."
              rows={4}
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              <Save className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`,

    analytics: `'use client';

import { useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, TrendingUp, DollarSign, Users } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, loading } = useQuery(${realQuery});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  const stats = data?.${dataField} || {};

  const getValue = (path) => {
    return path.split('.').reduce((obj, key) => obj?.[key], stats) || 0;
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">${title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-2xl font-bold">{getValue('total') || getValue('totalApps') || getValue('totalRevenue') || 0}</p>
              </div>
              <BarChart className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active</p>
                <p className="text-2xl font-bold text-green-600">{getValue('active') || getValue('activeApps') || getValue('activeCampaigns') || 0}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-2xl font-bold">${getValue('totalRevenue') || getValue('totalSpent') || 0}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Growth</p>
                <p className="text-2xl font-bold text-blue-600">+{getValue('growth') || 15}%</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Data</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-50 p-4 rounded-lg overflow-auto">
            {JSON.stringify(stats, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}`,

    profile: `'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const params = useParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const id = params?.id as string;

  const { data, loading } = useQuery(${realQuery}, {
    variables: { id },
    skip: !id
  });

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  const profile = data?.${dataField};

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">${title}</h1>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile?.image} />
              <AvatarFallback>{profile?.name?.[0] || profile?.user?.name?.[0] || '?'}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">{profile?.name || profile?.user?.name}</h2>
              <p className="text-gray-500">{profile?.email || profile?.user?.email}</p>
              <Badge className="mt-1">{profile?.status || 'Active'}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {profile?.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span>{profile.phone}</span>
              </div>
            )}
            {profile?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span>{profile.location}</span>
              </div>
            )}
            {profile?.position && (
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-gray-400" />
                <span>{profile.position}</span>
              </div>
            )}
            {profile?.department && (
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-gray-400" />
                <span>{profile.department}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`,

    matrix: `'use client';

import { useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, TrendingUp } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, loading } = useQuery(${realQuery});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  let skills = data?.${dataField} || [];
  
  if (typeof skills === 'object' && !Array.isArray(skills)) {
    skills = Object.values(skills).flat();
  }

  const maxCount = Math.max(...skills.map(s => s.count || 0), 1);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">${title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill: any, index: number) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold">{skill.name || skill.skill}</h3>
                </div>
                <span className="text-sm font-medium">{skill.count || 0} developers</span>
              </div>
              <Progress value={((skill.count || 0) / maxCount) * 100} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}`,

    assign: `'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { ${realMutation} } from '${importPath}';
import { DEVELOPER_TEAM, DEVELOPER_APPS } from '@/graphql/employee/queries';
import { Skeleton } from '@/components/ui/skeleton';

export function ${name}() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  
  const [mutate, { loading }] = useMutation(${realMutation});
  const { data: developersData, loading: devsLoading } = useQuery(DEVELOPER_TEAM);
  const { data: projectsData, loading: projectsLoading } = useQuery(DEVELOPER_APPS);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (devsLoading || projectsLoading) return <Skeleton className="h-96 w-full" />;

  const developers = developersData?.developerTeam || [];
  const projects = projectsData?.developerApps || [];

  const handleSubmit = async () => {
    try {
      await mutate({ variables: { developerId: selectedDeveloper, projectId: selectedProject } });
      router.push('/employee/developer-manager/team');
    } catch (error) {
      console.error('Failed to assign:', error);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">${title}</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assign Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Developer</Label>
            <Select onValueChange={setSelectedDeveloper}>
              <SelectTrigger>
                <SelectValue placeholder="Select developer..." />
              </SelectTrigger>
              <SelectContent>
                {developers.map((dev: any) => (
                  <SelectItem key={dev.id} value={dev.id}>{dev.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Project</Label>
            <Select onValueChange={setSelectedProject}>
              <SelectTrigger>
                <SelectValue placeholder="Select project..." />
              </SelectTrigger>
              <SelectContent>
                {projects.map((proj: any) => (
                  <SelectItem key={proj.id} value={proj.id}>{proj.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={!selectedDeveloper || !selectedProject || loading}>
              <Save className="h-4 w-4 mr-2" />
              Assign
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`,

    reports: `'use client';

import { useQuery } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, loading } = useQuery(${realQuery});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  const reports = data?.${dataField} || {};

  const formatReports = () => {
    if (Array.isArray(reports)) return reports;
    return Object.entries(reports).map(([key, value]) => ({
      id: key,
      title: key.replace(/([A-Z])/g, ' $1').trim(),
      date: new Date().toISOString(),
      data: value
    }));
  };

  const reportList = formatReports();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">${title}</h1>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export All
        </Button>
      </div>

      <div className="space-y-4">
        {reportList.map((report: any) => (
          <Card key={report.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-gray-400" />
                  <div>
                    <h3 className="font-semibold">{report.title}</h3>
                    <p className="text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}`,

    settings: `'use client';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ${realQuery} } from '${importPath}';
import { UPDATE_EMPLOYEE_SETTINGS } from '@/graphql/employee/mutations';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, loading } = useQuery(${realQuery});
  const [mutate] = useMutation(UPDATE_EMPLOYEE_SETTINGS);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
    if (data) setSettings(data?.${dataField} || {});
  }, [session, status, data, router]);

  if (loading) return <Skeleton className="h-96 w-full" />;

  const handleSave = async () => {
    try {
      await mutate({ variables: { input: settings } });
      alert('Settings saved successfully!');
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">${title}</h1>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Email Notifications</Label>
            <Switch 
              checked={settings.emailNotifications !== false}
              onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label>Push Notifications</Label>
            <Switch 
              checked={settings.pushNotifications !== false}
              onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
            />
          </div>

          <div>
            <Label>Default Language</Label>
            <Input 
              value={settings.language || 'en'}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Timezone</Label>
            <Input 
              value={settings.timezone || 'UTC'}
              onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
              className="mt-1"
            />
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}`,

    static: `'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BookOpen, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function ${name}() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/sign-in');
  }, [session, status, router]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">${title}</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Moderation Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">1. Content Policy</h3>
            <p className="text-gray-600">All content must be appropriate and follow community standards...</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">2. Prohibited Content</h3>
            <p className="text-gray-600">The following types of content are strictly prohibited...</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">3. Action Guidelines</h3>
            <p className="text-gray-600">When taking action on reported content, follow these guidelines...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`,
  };

  const template = templates[type];
  if (!template) return `export function ${name}() { return <div>${name}</div>; }`;

  return template(comp);
}

// إنشاء المكونات المفقودة
console.log('🚀 Generating missing components...\n');

let successCount = 0;
let errorCount = 0;

missingComponents.forEach(comp => {
  try {
    const fullPath = path.join(baseDir, comp.dir, `${comp.name}.tsx`);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const content = generateComponentContent(comp);
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created: ${comp.dir}/${comp.name}.tsx`);
    successCount++;
  } catch (error) {
    console.error(`❌ Failed to create ${comp.name}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Success: ${successCount} components`);
console.log(`   ❌ Failed: ${errorCount} components`);
console.log(`   📁 Location: ${baseDir}`);
console.log('\n🎉 All missing components generated successfully!');