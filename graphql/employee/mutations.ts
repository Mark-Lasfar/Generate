// graphql/employee/mutations.ts
import { gql } from '@apollo/client';

// ==================== PROJECT MUTATIONS ====================

export const UPDATE_PROJECT_STATUS = gql`
  mutation UpdateProjectStatus($projectId: ID!, $status: ProjectStatus!) {
    updateProjectStatus(projectId: $projectId, status: $status) {
      success
      message
      data {
        id
        title
        status
        progress
        activities {
          id
          description
          timestamp
          type
        }
        updatedAt
      }
    }
  }
`;

export const SUBMIT_PROJECT = gql`
  mutation SubmitProject($projectId: ID!, $message: String!, $files: [Upload!]) {
    submitProject(projectId: $projectId, message: $message, files: $files) {
      success
      message
      data {
        id
        status
        submission {
          id
          message
          files {
            name
            url
          }
          submittedAt
        }
        activities {
          id
          description
          timestamp
          type
        }
      }
    }
  }
`;

export const LOG_TIME = gql`
  mutation LogTime($projectId: ID!, $seconds: Int!, $description: String!, $date: DateTime!) {
    logTime(projectId: $projectId, seconds: $seconds, description: $description, date: $date) {
      success
      message
      data {
        id
        hoursLogged
        entries {
          id
          seconds
          description
          date
        }
      }
    }
  }
`;

// ==================== BID MUTATIONS ====================

export const CREATE_BID = gql`
  mutation CreateBid($projectId: ID!, $input: BidInput!) {
    createBid(projectId: $projectId, input: $input) {
      success
      message
      data {
        id
        projectId
        project {
          id
          title
          client {
            name
            rating
          }
        }
        amount
        deliveryTime
        proposal
        status
        createdAt
      }
    }
  }
`;

export const WITHDRAW_BID = gql`
  mutation WithdrawBid($bidId: ID!) {
    withdrawBid(bidId: $bidId) {
      success
      message
    }
  }
`;

// ==================== EARNINGS MUTATIONS ====================

export const REQUEST_EMPLOYEE_WITHDRAWAL = gql`
  mutation RequestEmployeeWithdrawal($amount: Float!, $method: String!, $accountDetails: JSON!) {
    requestEmployeeWithdrawal(amount: $amount, method: $method, accountDetails: $accountDetails) {
      success
      message
      data {
        id
        amount
        method
        status
        requestedAt
        estimatedArrival
      }
    }
  }
`;
// ==================== PROFILE MUTATIONS ====================

export const UPDATE_EMPLOYEE_PROFILE = gql`
  mutation UpdateEmployeeProfile($input: EmployeeProfileInput!) {
    updateEmployeeProfile(input: $input) {
      success
      message
      data {
        id
        employeeId
        position
        department
        bio
        phone
        location
        website
        hourlyRate
        availability
        rating
        skills
        languages
        socialLinks {
          linkedin
          github
          twitter
          behance
          dribbble
          website
        }
        updatedAt
      }
    }
  }
`;

// ==================== PORTFOLIO MUTATIONS ====================

export const ADD_PORTFOLIO_PROJECT = gql`
  mutation AddPortfolioProject($input: PortfolioProjectInput!) {
    addPortfolioProject(input: $input) {
      success
      message
      data {
        id
        title
        description
        image
        technologies
        category
        liveUrl
        githubUrl
        behanceUrl
        client
        year
        duration
        role
        featured
        createdAt
      }
    }
  }
`;

export const UPDATE_PORTFOLIO_PROJECT = gql`
  mutation UpdatePortfolioProject($id: ID!, $input: PortfolioProjectInput!) {
    updatePortfolioProject(id: $id, input: $input) {
      success
      message
    }
  }
`;

export const DELETE_PORTFOLIO_PROJECT = gql`
  mutation DeletePortfolioProject($id: ID!) {
    deletePortfolioProject(id: $id) {
      success
      message
    }
  }
`;

export const ADD_SKILL = gql`
  mutation AddSkill($input: SkillInput!) {
    addSkill(input: $input) {
      success
      message
      data {
        id
        name
        icon
        level
        yearsOfExperience
        projects
      }
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($id: ID!, $input: SkillInput!) {
    updateSkill(id: $id, input: $input) {
      success
      message
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      success
      message
    }
  }
`;


// graphql/messages/mutations.ts

export const SEND_MESSAGE = gql`
  mutation SendMessage($conversationId: ID!, $content: String!, $attachments: [Upload!]) {
    sendMessage(conversationId: $conversationId, content: $content, attachments: $attachments) {
      success
      message
      data {
        id
        content
        senderId
        sender {
          id
          name
          image
          isOnline
          lastActive
        }
        read
        createdAt
        attachments {
          name
          url
          type
        }
      }
    }
  }
`;


export const MARK_AS_READ = gql`
  mutation MarkAsRead($conversationId: ID!) {
    markAsRead(conversationId: $conversationId) {
      success
      message
    }
  }
`;
export const START_CONVERSATION = gql`
  mutation StartConversation($participantId: ID!, $projectId: ID) {
    startConversation(participantId: $participantId, projectId: $projectId) {
      success
      message
      data {
        id
        participants {
          id
          name
          isOnline
        }
      }
    }
  }
`;
export const UPDATE_EMPLOYEE_SETTINGS = gql`
  mutation UpdateEmployeeSettings($input: EmployeeSettingsInput!) {
    updateEmployeeSettings(input: $input) {
      success
      message
    }
  }
`;

// graphql/messages/mutations.ts

export const SET_TYPING = gql`
  mutation SetTyping($conversationId: ID!, $isTyping: Boolean!) {
    setTyping(conversationId: $conversationId, isTyping: $isTyping) {
      success
      message
    }
  }
`;


export const UPDATE_ONLINE_STATUS = gql`
  mutation UpdateOnlineStatus($isOnline: Boolean!) {
    updateOnlineStatus(isOnline: $isOnline) {
      success
      message
    }
  }
`;


export const UPDATE_EMPLOYEE_PAYMENT_SETTINGS = gql`
  mutation UpdateEmployeePaymentSettings($input: PaymentSettingsInput!) {
    updateEmployeePaymentSettings(input: $input) {
      success
      message
    }
  }
`;

export const VERIFY_BANK_ACCOUNT = gql`
  mutation VerifyBankAccount($bankAccountId: ID!) {
    verifyBankAccount(bankAccountId: $bankAccountId) {
      success
      message
    }
  }
`;


export const CONFIRM_BANK_VERIFICATION = gql`
  mutation ConfirmBankVerification($bankAccountId: ID!, $amounts: [Float!]!) {
    confirmBankVerification(bankAccountId: $bankAccountId, amounts: $amounts) {
      success
      message
    }
  }
`;




// ----------------------


export const SCHEDULE_INTERVIEW = gql`
  mutation ScheduleInterview($applicationId: ID!, $date: DateTime!, $type: String!, $notes: String) {
    scheduleInterview(applicationId: $applicationId, date: $date, type: $type, notes: $notes) {
      id
      candidateName
      candidateEmail
      position
      department
      date
      time
      type
      status
      interviewer
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee($input: CreateEmployeeInput!) {
    addEmployee(input: $input) {
      id
      name
      email
      role
      department
      position
      employeeId
    }
  }
`;

// ==================== DEPARTMENT MANAGER MUTATIONS ====================

export const ASSIGN_TASK = gql`
  mutation AssignTask($projectId: ID!, $memberId: ID!, $task: String!, $deadline: DateTime) {
    assignTask(projectId: $projectId, memberId: $memberId, task: $task, deadline: $deadline) {
      id
      projectId
      assignedTo
      description
      deadline
      status
    }
  }
`;

export const UPDATE_PROJECT_PROGRESS = gql`
  mutation UpdateProjectProgress($projectId: ID!, $progress: Int!) {
    updateProjectProgress(projectId: $projectId, progress: $progress) {
      id
      title
      progress
      status
    }
  }
`;

export const APPROVE_LEAVE = gql`
  mutation ApproveLeave($memberId: ID!, $leaveId: ID!, $approved: Boolean!) {
    approveLeave(memberId: $memberId, leaveId: $leaveId, approved: $approved) {
      success
      message
      data
    }
  }
`;

// ==================== SELLER MANAGER MUTATIONS ====================

export const APPROVE_SELLER = gql`
  mutation ApproveSeller($sellerId: ID!) {
    approveSeller(sellerId: $sellerId) {
      id
      businessName
      email
      status
      joinDate
    }
  }
`;

export const REJECT_SELLER = gql`
  mutation RejectSeller($sellerId: ID!, $reason: String!) {
    rejectSeller(sellerId: $sellerId, reason: $reason) {
      id
      businessName
      email
      status
    }
  }
`;

export const SUSPEND_SELLER_EMPLOYEE = gql`
  mutation SuspendSeller($sellerId: ID!, $reason: String!) {
    suspendManagerSeller(sellerId: $sellerId, reason: $reason) {
      id
      businessName
      email
      status
    }
  }
`;

// ==================== APP MANAGER MUTATIONS ====================

export const REVIEW_APP = gql`
  mutation ReviewApp($appId: ID!, $decision: String!, $comments: String) {
    reviewApp(appId: $appId, decision: $decision, comments: $comments) {
      id
      name
      developer {
        id
        name
      }
      status
      version
    }
  }
`;

export const APPROVE_DEVELOPER = gql`
  mutation ApproveDeveloper($developerId: ID!) {
    approveDeveloper(developerId: $developerId) {
      id
      name
      email
      status
    }
  }
`;

// ==================== DEVELOPER MANAGER MUTATIONS ====================

export const ASSIGN_PROJECT = gql`
  mutation AssignProject($developerId: ID!, $projectId: ID!) {
    assignProject(developerId: $developerId, projectId: $projectId) {
      developerId
      projectId
      assignedAt
      status
    }
  }
`;

export const UPDATE_DEVELOPER_STATUS = gql`
  mutation UpdateDeveloperStatus($developerId: ID!, $status: String!) {
    updateDeveloperStatus(developerId: $developerId, status: $status) {
      id
      name
      email
      status
    }
  }
`;

// ==================== STORE MANAGER MUTATIONS ====================

export const APPROVE_STORE = gql`
  mutation ApproveStore($storeId: ID!) {
    approveStore(storeId: $storeId) {
      id
      name
      owner {
        id
        businessName
      }
      status
    }
  }
`;

export const SUSPEND_STORE = gql`
  mutation SuspendStore($storeId: ID!, $reason: String!) {
    suspendStore(storeId: $storeId, reason: $reason) {
      id
      name
      owner {
        id
        businessName
      }
      status
    }
  }
`;

// ==================== FINANCE MANAGER MUTATIONS ====================

export const PROCESS_PAYOUT = gql`
  mutation ProcessPayout($payoutId: ID!, $transactionId: String!) {
    processPayout(payoutId: $payoutId, transactionId: $transactionId) {
      id
      amount
      status
      processedAt
      transactionId
    }
  }
`;

export const APPROVE_WITHDRAWAL = gql`
  mutation ApproveWithdrawal($withdrawalId: ID!) {
    approveManagerWithdrawal(withdrawalId: $withdrawalId) {
      id
      amount
      status
      processedAt
    }
  }
`;

// ==================== MARKETING MANAGER MUTATIONS ====================

export const CREATE_CAMPAIGN_EMPLOYEE = gql`
  mutation CreateEmployeeCampaign($input: CampaignInput!) {
    createManagerCampaign(input: $input) {
      id
      name
      channel
      status
      startDate
      endDate
      budget
      spent
    }
  }
`;

export const UPDATE_CAMPAIGN_STATUS = gql`
  mutation UpdateCampaignStatus($campaignId: ID!, $status: String!) {
    updateCampaignStatus(campaignId: $campaignId, status: $status) {
      id
      name
      status
    }
  }
`;

// ==================== APP REVIEWER MUTATIONS ====================

export const SUBMIT_REVIEW = gql`
  mutation SubmitReview($appId: ID!, $decision: String!, $comments: String!, $timeSpent: Int!) {
    submitReviews(appId: $appId, decision: $decision, comments: $comments, timeSpent: $timeSpent) {
      success
      message
      data {
        id
        name
        developer
        reviewedAt
        decision
        timeSpent
      }
    }
  }
`;

// ==================== CONTENT MODERATOR MUTATIONS ====================

export const RESOLVE_REPORT = gql`
  mutation ResolveReport($reportId: ID!, $action: String!, $notes: String) {
    resolveReport(reportId: $reportId, action: $action, notes: $notes) {
      id
      contentType
      contentId
      status
    }
  }
`;

export const DELETE_CONTENT = gql`
  mutation DeleteContent($contentId: ID!, $contentType: String!) {
    deleteContent(contentId: $contentId, contentType: $contentType) {
      success
      message
    }
  }
`;

// ==================== SUPPORT AGENT MUTATIONS ====================

export const UPDATE_TICKET_STATUS = gql`
  mutation UpdateTicketStatus($ticketId: ID!, $status: String!, $resolution: String) {
    updateTicketStatus(ticketId: $ticketId, status: $status, resolution: $resolution) {
      id
      subject
      customer
      status
      priority
      lastUpdated
    }
  }
`;

export const ESCALATE_TICKET = gql`
  mutation EscalateTicket($ticketId: ID!, $reason: String!) {
    escalateTicket(ticketId: $ticketId, reason: $reason) {
      id
      subject
      customer
      status
      priority
    }
  }
`;

export const REJECT_WITHDRAWAL = gql`
  mutation RejectEmployeeWithdrawal($withdrawalId: ID!, $reason: String!) {
    rejectEmployeeWithdrawal(withdrawalId: $withdrawalId, reason: $reason) {
      success
      message
      data {
        id
        status
        processedAt
        adminNotes
      }
    }
  }
`;


export const UPDATE_APPLICATION_STATUS_EMPLOYEE = gql`
  mutation UpdateEmployeeApplicationStatus($applicationId: ID!, $status: String!, $notes: String) {
    updateApplicationStatusemployee(applicationId: $applicationId, status: $status, notes: $notes) {
      id
      status
      reviewedAt
      notes
      candidate {
        name
        email
      }
    }
  }
`;
