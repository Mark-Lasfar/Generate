// scripts/generate-employee-routes.js

const fs = require('fs');
const path = require('path');

const routes = [
  // ==================== HR MANAGER ====================
  { 
    path: 'hr/page.tsx', 
    component: 'HRDashboard',
    role: 'hr',
    query: 'HR_STATS',
    isDashboard: true
  },
  { 
    path: 'hr/post-job/page.tsx', 
    component: 'PostJobPage',
    role: 'hr',
    query: null,
    isForm: true
  },
  { 
    path: 'hr/applications/page.tsx', 
    component: 'HRApplicationsPage',
    role: 'hr',
    query: 'HR_APPLICATIONS',
    queryParams: { limit: 20 }
  },
  { 
    path: 'hr/applications/[id]/page.tsx', 
    component: 'ApplicationDetailsPage',
    role: 'hr',
    query: 'GET_ADMIN_APPLICATION',
    hasId: true,
    mutation: 'UPDATE_APPLICATION_STATUS'
  },
  { 
    path: 'hr/interviews/page.tsx', 
    component: 'InterviewsPage',
    role: 'hr',
    query: 'HR_INTERVIEWS',
    queryParams: { upcoming: true }
  },
  { 
    path: 'hr/employees/page.tsx', 
    component: 'HREmployeesPage',
    role: 'hr',
    query: 'HR_EMPLOYEES'
  },
  { 
    path: 'hr/employees/add/page.tsx', 
    component: 'AddEmployeePage',
    role: 'hr',
    mutation: 'ADD_EMPLOYEE',
    isForm: true
  },
  { 
    path: 'hr/employees/[id]/page.tsx', 
    component: 'EmployeeProfilePage',
    role: 'hr',
    query: 'GET_EMPLOYEE',
    hasId: true,
    mutation: 'UPDATE_EMPLOYEE'
  },

  // ==================== MANAGER ====================
  { 
    path: 'manager/page.tsx', 
    component: 'ManagerDashboard',
    role: 'manager',
    query: 'MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'manager/projects/page.tsx', 
    component: 'ManagerProjectsPage',
    role: 'manager',
    query: 'MANAGER_PROJECTS'
  },
  { 
    path: 'manager/projects/new/page.tsx', 
    component: 'NewProjectPage',
    role: 'manager',
    mutation: 'CREATE_PROJECT',
    isForm: true
  },
  { 
    path: 'manager/projects/[id]/page.tsx', 
    component: 'ProjectDetailsPage',
    role: 'manager',
    query: 'GET_PROJECT_BY_ID',
    hasId: true,
    mutation: 'UPDATE_PROJECT'
  },
  { 
    path: 'manager/projects/[id]/edit/page.tsx', 
    component: 'EditProjectPage',
    role: 'manager',
    query: 'GET_PROJECT_BY_ID',
    hasId: true,
    mutation: 'UPDATE_PROJECT',
    isForm: true
  },
  { 
    path: 'manager/team/page.tsx', 
    component: 'TeamPage',
    role: 'manager',
    query: 'MANAGER_TEAM_MEMBERS'
  },
  { 
    path: 'manager/team/assign/page.tsx', 
    component: 'AssignTaskPage',
    role: 'manager',
    mutation: 'ASSIGN_TASK',
    isForm: true
  },
  { 
    path: 'manager/team/add/page.tsx', 
    component: 'AddTeamMemberPage',
    role: 'manager',
    mutation: 'ADD_TEAM_MEMBER',
    isForm: true
  },
  { 
    path: 'manager/team/[id]/page.tsx', 
    component: 'TeamMemberProfilePage',
    role: 'manager',
    query: 'GET_EMPLOYEE',
    hasId: true
  },
  { 
    path: 'manager/reports/page.tsx', 
    component: 'ManagerReportsPage',
    role: 'manager',
    query: 'MANAGER_REPORTS'
  },
  { 
    path: 'manager/budget/page.tsx', 
    component: 'BudgetPage',
    role: 'manager',
    query: 'MANAGER_BUDGET'
  },

  // ==================== SELLER MANAGER ====================
  { 
    path: 'seller-manager/page.tsx', 
    component: 'SellerManagerDashboard',
    role: 'seller_manager',
    query: 'SELLER_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'seller-manager/approvals/page.tsx', 
    component: 'SellerApprovalsPage',
    role: 'seller_manager',
    query: 'PENDING_SELLERS'
  },
  { 
    path: 'seller-manager/sellers/page.tsx', 
    component: 'SellersPage',
    role: 'seller_manager',
    query: 'ALL_SELLERS'
  },
  { 
    path: 'seller-manager/sellers/[id]/page.tsx', 
    component: 'SellerDetailsPage',
    role: 'seller_manager',
    query: 'GET_SELLER',
    hasId: true,
    mutation: 'UPDATE_SELLER'
  },
  { 
    path: 'seller-manager/stores/page.tsx', 
    component: 'StoresPage',
    role: 'seller_manager',
    query: 'ALL_STORES'
  },
  { 
    path: 'seller-manager/stores/[id]/page.tsx', 
    component: 'StoreDetailsPage',
    role: 'seller_manager',
    query: 'GET_STORE',
    hasId: true,
    mutation: 'UPDATE_STORE'
  },
  { 
    path: 'seller-manager/reports/page.tsx', 
    component: 'SellerReportsPage',
    role: 'seller_manager',
    query: 'SELLER_REPORTS'
  },

  // ==================== APP MANAGER ====================
  { 
    path: 'app-manager/page.tsx', 
    component: 'AppManagerDashboard',
    role: 'app_manager',
    query: 'APP_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'app-manager/reviews/page.tsx', 
    component: 'AppReviewsPage',
    role: 'app_manager',
    query: 'PENDING_APPS'
  },
  { 
    path: 'app-manager/developers/page.tsx', 
    component: 'DevelopersPage',
    role: 'app_manager',
    query: 'ALL_DEVELOPERS'
  },
  { 
    path: 'app-manager/developers/[id]/page.tsx', 
    component: 'DeveloperDetailsPage',
    role: 'app_manager',
    query: 'GET_DEVELOPER',
    hasId: true
  },
  { 
    path: 'app-manager/apps/page.tsx', 
    component: 'AppsPage',
    role: 'app_manager',
    query: 'ALL_APPS'
  },
  { 
    path: 'app-manager/apps/[id]/page.tsx', 
    component: 'AppDetailsPage',
    role: 'app_manager',
    query: 'GET_APP',
    hasId: true
  },
  { 
    path: 'app-manager/apps/[id]/review/page.tsx', 
    component: 'AppReviewPage',
    role: 'app_manager',
    query: 'GET_APP',
    hasId: true,
    mutation: 'REVIEW_APP',
    isForm: true
  },
  { 
    path: 'app-manager/analytics/page.tsx', 
    component: 'AppAnalyticsPage',
    role: 'app_manager',
    query: 'APP_ANALYTICS'
  },
  { 
    path: 'app-manager/categories/page.tsx', 
    component: 'CategoriesPage',
    role: 'app_manager',
    query: 'APP_CATEGORIES'
  },

  // ==================== DEVELOPER MANAGER ====================
  { 
    path: 'developer-manager/page.tsx', 
    component: 'DeveloperManagerDashboard',
    role: 'developer_manager',
    query: 'DEVELOPER_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'developer-manager/assign/page.tsx', 
    component: 'AssignProjectPage',
    role: 'developer_manager',
    mutation: 'ASSIGN_PROJECT',
    isForm: true
  },
  { 
    path: 'developer-manager/team/page.tsx', 
    component: 'DeveloperTeamPage',
    role: 'developer_manager',
    query: 'DEVELOPER_TEAM'
  },
  { 
    path: 'developer-manager/team/[id]/page.tsx', 
    component: 'DeveloperProfilePage',
    role: 'developer_manager',
    query: 'GET_DEVELOPER',
    hasId: true
  },
  { 
    path: 'developer-manager/projects/page.tsx', 
    component: 'DeveloperProjectsPage',
    role: 'developer_manager',
    query: 'DEVELOPER_APPS'
  },
  { 
    path: 'developer-manager/projects/new/page.tsx', 
    component: 'NewDeveloperProjectPage',
    role: 'developer_manager',
    mutation: 'CREATE_PROJECT',
    isForm: true
  },
  { 
    path: 'developer-manager/projects/[id]/page.tsx', 
    component: 'DeveloperProjectDetailsPage',
    role: 'developer_manager',
    query: 'GET_PROJECT_BY_ID',
    hasId: true
  },
  { 
    path: 'developer-manager/skills/page.tsx', 
    component: 'SkillsMatrixPage',
    role: 'developer_manager',
    query: 'SKILLS_MATRIX'
  },
  { 
    path: 'developer-manager/reports/page.tsx', 
    component: 'DeveloperReportsPage',
    role: 'developer_manager',
    query: 'DEVELOPER_REPORTS'
  },

  // ==================== STORE MANAGER ====================
  { 
    path: 'store-manager/page.tsx', 
    component: 'StoreManagerDashboard',
    role: 'store_manager',
    query: 'STORE_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'store-manager/approvals/page.tsx', 
    component: 'StoreApprovalsPage',
    role: 'store_manager',
    query: 'PENDING_STORES'
  },
  { 
    path: 'store-manager/categories/page.tsx', 
    component: 'StoreCategoriesPage',
    role: 'store_manager',
    query: 'STORE_CATEGORIES'
  },
  { 
    path: 'store-manager/stores/page.tsx', 
    component: 'StoresListPage',
    role: 'store_manager',
    query: 'ALL_STORES'
  },
  { 
    path: 'store-manager/stores/[id]/page.tsx', 
    component: 'StoreDetailsPage',
    role: 'store_manager',
    query: 'GET_STORE',
    hasId: true
  },
  { 
    path: 'store-manager/stores/[id]/suspend/page.tsx', 
    component: 'SuspendStorePage',
    role: 'store_manager',
    query: 'GET_STORE',
    hasId: true,
    mutation: 'SUSPEND_STORE',
    isForm: true
  },
  { 
    path: 'store-manager/analytics/page.tsx', 
    component: 'StoreAnalyticsPage',
    role: 'store_manager',
    query: 'STORE_ANALYTICS'
  },
  { 
    path: 'store-manager/suspended/page.tsx', 
    component: 'SuspendedStoresPage',
    role: 'store_manager',
    query: 'SUSPENDED_STORES'
  },

  // ==================== FINANCE MANAGER ====================
  { 
    path: 'finance-manager/page.tsx', 
    component: 'FinanceManagerDashboard',
    role: 'finance_manager',
    query: 'FINANCE_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'finance-manager/payouts/page.tsx', 
    component: 'PayoutsPage',
    role: 'finance_manager',
    query: 'PENDING_PAYOUTS'
  },
  { 
    path: 'finance-manager/payouts/[id]/page.tsx', 
    component: 'PayoutDetailsPage',
    role: 'finance_manager',
    query: 'GET_PAYOUT',
    hasId: true,
    mutation: 'PROCESS_PAYOUT'
  },
  { 
    path: 'finance-manager/salaries/page.tsx', 
    component: 'SalariesPage',
    role: 'finance_manager',
    query: 'EMPLOYEE_SALARIES'
  },
  { 
    path: 'finance-manager/salaries/[id]/page.tsx', 
    component: 'SalaryDetailsPage',
    role: 'finance_manager',
    query: 'GET_SALARY',
    hasId: true
  },
  { 
    path: 'finance-manager/reports/page.tsx', 
    component: 'FinanceReportsPage',
    role: 'finance_manager',
    query: 'FINANCE_REPORTS'
  },
  { 
    path: 'finance-manager/analytics/page.tsx', 
    component: 'FinanceAnalyticsPage',
    role: 'finance_manager',
    query: 'FINANCE_ANALYTICS'
  },

  // ==================== MARKETING MANAGER ====================
  { 
    path: 'marketing-manager/page.tsx', 
    component: 'MarketingManagerDashboard',
    role: 'marketing_manager',
    query: 'MARKETING_MANAGER_STATS',
    isDashboard: true
  },
  { 
    path: 'marketing-manager/campaigns/page.tsx', 
    component: 'CampaignsPage',
    role: 'marketing_manager',
    query: 'ACTIVE_CAMPAIGNS'
  },
  { 
    path: 'marketing-manager/campaigns/new/page.tsx', 
    component: 'NewCampaignPage',
    role: 'marketing_manager',
    mutation: 'CREATE_CAMPAIGN_EMPLOYEE',
    isForm: true
  },
  { 
    path: 'marketing-manager/campaigns/[id]/page.tsx', 
    component: 'CampaignDetailsPage',
    role: 'marketing_manager',
    query: 'GET_CAMPAIGN',
    hasId: true
  },
  { 
    path: 'marketing-manager/campaigns/[id]/edit/page.tsx', 
    component: 'EditCampaignPage',
    role: 'marketing_manager',
    query: 'GET_CAMPAIGN',
    hasId: true,
    mutation: 'UPDATE_CAMPAIGN',
    isForm: true
  },
  { 
    path: 'marketing-manager/analytics/page.tsx', 
    component: 'MarketingAnalyticsPage',
    role: 'marketing_manager',
    query: 'MARKETING_ANALYTICS'
  },
  { 
    path: 'marketing-manager/audience/page.tsx', 
    component: 'AudiencePage',
    role: 'marketing_manager',
    query: 'AUDIENCE_DATA'
  },
  { 
    path: 'marketing-manager/email/page.tsx', 
    component: 'EmailMarketingPage',
    role: 'marketing_manager',
    query: 'EMAIL_CAMPAIGNS'
  },

  // ==================== APP REVIEWER ====================
  { 
    path: 'app-reviewer/page.tsx', 
    component: 'AppReviewerDashboard',
    role: 'app_reviewer',
    query: 'APP_REVIEWER_STATS',
    isDashboard: true
  },
  { 
    path: 'app-reviewer/pending/page.tsx', 
    component: 'PendingReviewsPage',
    role: 'app_reviewer',
    query: 'PENDING_APP_REVIEWS'
  },
  { 
    path: 'app-reviewer/approved/page.tsx', 
    component: 'ApprovedAppsPage',
    role: 'app_reviewer',
    query: 'APPROVED_APPS'
  },
  { 
    path: 'app-reviewer/rejected/page.tsx', 
    component: 'RejectedAppsPage',
    role: 'app_reviewer',
    query: 'REJECTED_APPS'
  },
  { 
    path: 'app-reviewer/apps/[id]/page.tsx', 
    component: 'ReviewAppPage',
    role: 'app_reviewer',
    query: 'GET_APP',
    hasId: true,
    mutation: 'SUBMIT_REVIEW',
    isForm: true
  },

  // ==================== CONTENT MODERATOR ====================
  { 
    path: 'content-moderator/page.tsx', 
    component: 'ContentModeratorDashboard',
    role: 'content_moderator',
    query: 'CONTENT_MODERATOR_STATS',
    isDashboard: true
  },
  { 
    path: 'content-moderator/pending/page.tsx', 
    component: 'PendingReportsPage',
    role: 'content_moderator',
    query: 'PENDING_REPORTS'
  },
  { 
    path: 'content-moderator/reviewed/page.tsx', 
    component: 'ReviewedReportsPage',
    role: 'content_moderator',
    query: 'REVIEWED_REPORTS'
  },
  { 
    path: 'content-moderator/flagged/page.tsx', 
    component: 'FlaggedContentPage',
    role: 'content_moderator',
    query: 'FLAGGED_CONTENT'
  },
  { 
    path: 'content-moderator/guidelines/page.tsx', 
    component: 'GuidelinesPage',
    role: 'content_moderator',
    query: 'MODERATION_GUIDELINES'
  },
  { 
    path: 'content-moderator/content/[id]/page.tsx', 
    component: 'ContentDetailsPage',
    role: 'content_moderator',
    query: 'GET_CONTENT',
    hasId: true,
    mutation: 'RESOLVE_REPORT'
  },

  // ==================== SUPPORT AGENT ====================
  { 
    path: 'support-agent/page.tsx', 
    component: 'SupportAgentDashboard',
    role: 'support_agent',
    query: 'SUPPORT_AGENT_STATS',
    isDashboard: true
  },
  { 
    path: 'support-agent/tickets/page.tsx', 
    component: 'AllTicketsPage',
    role: 'support_agent',
    query: 'ALL_TICKETS'
  },
  { 
    path: 'support-agent/tickets/[id]/page.tsx', 
    component: 'TicketDetailsPage',
    role: 'support_agent',
    query: 'GET_TICKET',
    hasId: true,
    mutation: 'UPDATE_TICKET_STATUS'
  },
  { 
    path: 'support-agent/my-tickets/page.tsx', 
    component: 'MyTicketsPage',
    role: 'support_agent',
    query: 'MY_TICKETS'
  },
  { 
    path: 'support-agent/stats/page.tsx', 
    component: 'SupportStatsPage',
    role: 'support_agent',
    query: 'SUPPORT_STATS'
  },
  { 
    path: 'support-agent/settings/page.tsx', 
    component: 'SupportSettingsPage',
    role: 'support_agent',
    query: 'SUPPORT_SETTINGS'
  },
];

const baseDir = path.join(__dirname, '../app/[locale]/employee');

// التحقق من وجود المكونات المطلوبة
const checkComponentExists = (componentName) => {
  const componentPaths = [
    `components/employee/dashboards/hr/${componentName}.tsx`,
    `components/employee/dashboards/manager/${componentName}.tsx`,
    `components/employee/dashboards/seller-manager/${componentName}.tsx`,
    `components/employee/dashboards/app-manager/${componentName}.tsx`,
    `components/employee/dashboards/developer-manager/${componentName}.tsx`,
    `components/employee/dashboards/store-manager/${componentName}.tsx`,
    `components/employee/dashboards/finance-manager/${componentName}.tsx`,
    `components/employee/dashboards/marketing-manager/${componentName}.tsx`,
    `components/employee/dashboards/app-reviewer/${componentName}.tsx`,
    `components/employee/dashboards/content-moderator/${componentName}.tsx`,
    `components/employee/dashboards/support-agent/${componentName}.tsx`,
    `components/employee/dashboards/regular/${componentName}.tsx`,
    `components/employee/dashboards/shared/${componentName}.tsx`,
  ];

  for (const componentPath of componentPaths) {
    const fullPath = path.join(__dirname, '..', componentPath);
    if (fs.existsSync(fullPath)) {
      return componentPath.replace('.tsx', '');
    }
  }
  return null;
};

// دالة لتوليد صفحة مع التحقق من الصلاحية
const generatePageContent = (route) => {
  const roleCheckFunction = `is${route.role.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')}`;

  const hasQuery = route.query && route.query !== 'null';
  const hasMutation = route.mutation && route.mutation !== 'null';
  const hasId = route.hasId;

  return `'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ${route.component} } from '@/components/employee/dashboards/${getComponentPath(route.component)}';
import { is${route.role.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')} } from '@/lib/auth-utils';
${hasQuery ? `import { ${route.query} } from '@/graphql/employee/queries';` : ''}
${hasMutation ? `import { ${route.mutation} } from '@/graphql/employee/mutations';` : ''}
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function ${route.component}Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  ${hasId ? 'const params = useParams();' : ''}
  const [loading, setLoading] = useState(true);

  ${hasId ? `const id = params?.id as string;` : ''}

  ${hasQuery ? `const { data: queryData, loading: queryLoading, error: queryError } = useQuery(${route.query}${
    hasId ? `, {
    variables: { id${route.query.includes('EMPLOYEE') ? '' : ''} },
    skip: !id
  }` : route.queryParams ? `, {
    variables: ${JSON.stringify(route.queryParams)}
  }` : ''
  });` : ''}

  ${hasMutation ? `const [mutate, { loading: mutationLoading }] = useMutation(${route.mutation});` : ''}

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/sign-in');
      return;
    }

    // التحقق من الصلاحية
    if (!is${route.role.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('')}(session)) {
      router.push('/employee/dashboard');
      return;
    }

    setLoading(false);
  }, [session, status, router]);

  if (status === 'loading' || loading ${hasQuery ? '|| queryLoading' : ''}) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!session) return null;

  ${hasQuery ? `
  if (queryError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Failed to load data: {queryError.message}</AlertDescription>
      </Alert>
    );
  }` : ''}

  const handleMutation = async (variables) => {
    try {
      ${hasMutation ? `const result = await mutate({ variables });
      return result.data;` : '// No mutation defined'}
    } catch (error) {
      console.error('Mutation failed:', error);
      throw error;
    }
  };

  return (
    <${route.component} 
      ${hasQuery ? `data={queryData?.${getDataField(route.query)}}` : ''}
      ${hasMutation ? `onSubmit={handleMutation}` : ''}
      ${hasId ? `id={id}` : ''}
    />
  );
}
`;
};

// دالة لتحديد حقل البيانات من الاستعلام
function getDataField(queryName) {
  const mappings = {
    'HR_STATS': 'hrStats',
    'HR_APPLICATIONS': 'hrApplications.applications',
    'HR_EMPLOYEES': 'hrEmployees',
    'HR_INTERVIEWS': 'hrInterviews',
    'MANAGER_STATS': 'managerStats',
    'MANAGER_TEAM_MEMBERS': 'managerTeamMembers',
    'MANAGER_PROJECTS': 'managerProjects',
    'SELLER_MANAGER_STATS': 'sellerManagerStats',
    'PENDING_SELLERS': 'pendingSellers',
    'ALL_STORES': 'allStores',
    'APP_MANAGER_STATS': 'appManagerStats',
    'PENDING_APPS': 'pendingApps',
    'ALL_DEVELOPERS': 'allDevelopers',
    'DEVELOPER_MANAGER_STATS': 'developerManagerStats',
    'DEVELOPER_TEAM': 'developerTeam',
    'DEVELOPER_APPS': 'developerApps',
    'STORE_MANAGER_STATS': 'storeManagerStats',
    'PENDING_STORES': 'pendingStores',
    'ACTIVE_STORES': 'activeStores',
    'FINANCE_MANAGER_STATS': 'financeManagerStats',
    'PENDING_PAYOUTS': 'pendingPayouts',
    'FINANCE_TRANSACTIONS': 'financeTransactions',
    'EMPLOYEE_SALARIES': 'employeeSalaries',
    'MARKETING_MANAGER_STATS': 'marketingManagerStats',
    'ACTIVE_CAMPAIGNS': 'activeCampaigns',
    'APP_REVIEWER_STATS': 'appReviewerStats',
    'PENDING_APP_REVIEWS': 'pendingAppReviews',
    'REVIEWED_APPS': 'reviewedApps',
    'CONTENT_MODERATOR_STATS': 'contentModeratorStats',
    'PENDING_REPORTS': 'pendingReports',
    'MODERATOR_ACTIONS': 'moderatorActions',
    'SUPPORT_AGENT_STATS': 'supportAgentStats',
    'OPEN_TICKETS': 'openTickets',
    'RESOLVED_TICKETS': 'resolvedTickets',
    'GET_EMPLOYEE': 'employee',
    'GET_SELLER': 'seller',
    'GET_STORE': 'store',
    'GET_DEVELOPER': 'developer',
    'GET_APP': 'app',
    'GET_PROJECT_BY_ID': 'project',
    'GET_PAYOUT': 'payout',
    'GET_SALARY': 'salary',
    'GET_CAMPAIGN': 'campaign',
    'GET_TICKET': 'ticket',
    'GET_CONTENT': 'content',
  };
  return mappings[queryName] || queryName.toLowerCase();
}

// دالة لتحديد مسار المكون
function getComponentPath(componentName) {
  const roleMap = {
    // HR
    HRDashboard: 'hr/HRDashboard',
    PostJobPage: 'hr/PostJobPage',
    HRApplicationsPage: 'hr/HRApplicationsList',
    ApplicationDetailsPage: 'hr/ApplicationDetails',
    InterviewsPage: 'hr/InterviewsPage',
    HREmployeesPage: 'hr/HREmployeesList',
    AddEmployeePage: 'hr/AddEmployeePage',
    EmployeeProfilePage: 'hr/EmployeeProfile',
    
    // Manager
    ManagerDashboard: 'manager/ManagerDashboard',
    ManagerProjectsPage: 'manager/ManagerProjectsList',
    NewProjectPage: 'manager/NewProjectPage',
    ProjectDetailsPage: 'manager/ProjectDetails',
    EditProjectPage: 'manager/EditProjectPage',
    TeamPage: 'manager/ManagerTeamMembers',
    AssignTaskPage: 'manager/AssignTaskPage',
    AddTeamMemberPage: 'manager/AddTeamMemberPage',
    TeamMemberProfilePage: 'manager/TeamMemberProfile',
    ManagerReportsPage: 'manager/ManagerReportsPage',
    BudgetPage: 'manager/BudgetPage',
    
    // Seller Manager
    SellerManagerDashboard: 'seller-manager/SellerManagerDashboard',
    SellerApprovalsPage: 'seller-manager/PendingSellersList',
    SellersPage: 'seller-manager/SellersPage',
    SellerDetailsPage: 'seller-manager/SellerDetails',
    StoresPage: 'seller-manager/StoresList',
    StoreDetailsPage: 'seller-manager/StoreDetails',
    SellerReportsPage: 'seller-manager/SellerReportsPage',
    
    // App Manager
    AppManagerDashboard: 'app-manager/AppManagerDashboard',
    AppReviewsPage: 'app-manager/PendingAppsList',
    DevelopersPage: 'app-manager/DevelopersList',
    DeveloperDetailsPage: 'app-manager/DeveloperDetails',
    AppsPage: 'app-manager/AppsPage',
    AppDetailsPage: 'app-manager/AppDetails',
    AppReviewPage: 'app-manager/AppReviewPage',
    AppAnalyticsPage: 'app-manager/AppAnalyticsPage',
    CategoriesPage: 'app-manager/CategoriesPage',
    
    // Developer Manager
    DeveloperManagerDashboard: 'developer-manager/DeveloperManagerDashboard',
    AssignProjectPage: 'developer-manager/AssignProjectPage',
    DeveloperTeamPage: 'developer-manager/DeveloperTeamList',
    DeveloperProfilePage: 'developer-manager/DeveloperProfile',
    DeveloperProjectsPage: 'developer-manager/DeveloperProjectsList',
    NewDeveloperProjectPage: 'developer-manager/NewDeveloperProjectPage',
    DeveloperProjectDetailsPage: 'developer-manager/DeveloperProjectDetails',
    SkillsMatrixPage: 'developer-manager/SkillsMatrixPage',
    DeveloperReportsPage: 'developer-manager/DeveloperReportsPage',
    
    // Store Manager
    StoreManagerDashboard: 'store-manager/StoreManagerDashboard',
    StoreApprovalsPage: 'store-manager/PendingStoresList',
    StoreCategoriesPage: 'store-manager/StoreCategoriesPage',
    StoresListPage: 'store-manager/ActiveStoresList',
    StoreDetailsPage: 'store-manager/StoreDetails',
    SuspendStorePage: 'store-manager/SuspendStorePage',
    StoreAnalyticsPage: 'store-manager/StoreAnalyticsPage',
    SuspendedStoresPage: 'store-manager/SuspendedStoresPage',
    
    // Finance Manager
    FinanceManagerDashboard: 'finance-manager/FinanceManagerDashboard',
    PayoutsPage: 'finance-manager/PendingPayoutsList',
    PayoutDetailsPage: 'finance-manager/PayoutDetails',
    SalariesPage: 'finance-manager/SalaryReportsList',
    SalaryDetailsPage: 'finance-manager/SalaryDetails',
    FinanceReportsPage: 'finance-manager/FinanceReportsPage',
    FinanceAnalyticsPage: 'finance-manager/FinanceAnalyticsPage',
    
    // Marketing Manager
    MarketingManagerDashboard: 'marketing-manager/MarketingManagerDashboard',
    CampaignsPage: 'marketing-manager/CampaignsList',
    NewCampaignPage: 'marketing-manager/NewCampaignPage',
    CampaignDetailsPage: 'marketing-manager/CampaignDetails',
    EditCampaignPage: 'marketing-manager/EditCampaignPage',
    MarketingAnalyticsPage: 'marketing-manager/AnalyticsReports',
    AudiencePage: 'marketing-manager/AudiencePage',
    EmailMarketingPage: 'marketing-manager/EmailMarketingPage',
    
    // App Reviewer
    AppReviewerDashboard: 'app-reviewer/AppReviewerDashboard',
    PendingReviewsPage: 'app-reviewer/PendingReviewsList',
    ApprovedAppsPage: 'app-reviewer/ReviewedAppsList',
    RejectedAppsPage: 'app-reviewer/ReviewedAppsList',
    ReviewAppPage: 'app-reviewer/ReviewAppPage',
    
    // Content Moderator
    ContentModeratorDashboard: 'content-moderator/ContentModeratorDashboard',
    PendingReportsPage: 'content-moderator/PendingReportsList',
    ReviewedReportsPage: 'content-moderator/ReportedContentList',
    FlaggedContentPage: 'content-moderator/FlaggedContentPage',
    GuidelinesPage: 'content-moderator/GuidelinesPage',
    ContentDetailsPage: 'content-moderator/ContentDetailsPage',
    
    // Support Agent
    SupportAgentDashboard: 'support-agent/SupportAgentDashboard',
    AllTicketsPage: 'support-agent/OpenTicketsList',
    TicketDetailsPage: 'support-agent/TicketDetailsPage',
    MyTicketsPage: 'support-agent/MyTicketsPage',
    SupportStatsPage: 'support-agent/TicketStats',
    SupportSettingsPage: 'support-agent/SupportSettingsPage',
  };
  
  return roleMap[componentName] || componentName.toLowerCase();
}

// إنشاء جميع المسارات
console.log('🚀 Generating employee routes...\n');

let successCount = 0;
let errorCount = 0;

routes.forEach(route => {
  try {
    const fullPath = path.join(baseDir, route.path);
    const dir = path.dirname(fullPath);
    
    // إنشاء المجلد إذا مش موجود
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // التحقق من وجود المكون
    const componentExists = checkComponentExists(route.component);
    if (!componentExists) {
      console.warn(`⚠️ Warning: Component ${route.component} not found`);
    }
    
    // كتابة ملف الصفحة
    fs.writeFileSync(fullPath, generatePageContent(route));
    console.log(`✅ Created: ${route.path}`);
    successCount++;
  } catch (error) {
    console.error(`❌ Failed to create ${route.path}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   ✅ Success: ${successCount} files`);
console.log(`   ❌ Failed: ${errorCount} files`);
console.log(`   📁 Location: ${baseDir}`);
console.log('\n🎉 All employee routes generated successfully!');