// graphql/employee/queries.ts
import { gql } from '@apollo/client';

// ==================== PROJECT QUERIES ====================

export const GET_MY_PROJECTS = gql`
  query GetMyProjects {
    myProjects {
      id
      title
      description
      status
      budget {
        amount
        currency
        type
        minAmount
        maxAmount
      }
      hoursWorked
      deadline
      progress
      client {
        id
        name
        email
        rating
      }
      requirements
      tasks {
        id
        title
        description
        completed
        hours
        dueDate
      }
      files {
        id
        name
        url
        type
        size
        uploadedAt
      }
      activities {
        id
        description
        timestamp
        type
      }
      timeEntries {
        id
        seconds
        description
        date
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    project(id: $id) {
      id
      title
      description
      status
      budget {
        amount
        currency
        type
        minAmount
        maxAmount
      }
      hoursWorked
      deadline
      progress
      client {
        id
        name
        email
        rating
      }
      requirements
      tasks {
        id
        title
        description
        completed
        hours
        dueDate
      }
      files {
        id
        name
        url
        type
        size
        uploadedAt
      }
      activities {
        id
        description
        timestamp
        type
      }
      timeEntries {
        id
        seconds
        description
        date
      }
      createdAt
      updatedAt
    }
  }
`;

// ==================== BID QUERIES ====================

export const GET_MY_BIDS = gql`
  query GetMyBids {
    myBids {
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
`;

// ==================== EARNINGS QUERIES ====================

export const GET_MY_EARNINGS = gql`
  query GetMyEarnings {
    myEarnings {
      total
      available
      pending
      paid
      thisMonth
      lastMonth
    }
    recentTransactions {
      id
      description
      amount
      type
      status
      date
      project
    }
  }
`;

export const GET_WITHDRAWAL_METHODS = gql`
  query GetWithdrawalMethods {
    withdrawalMethods {
      id
      type
      name
      icon
      minAmount
      maxAmount
      fee
      processingTime
    }
  }
`;

// ==================== PORTFOLIO QUERIES ====================

export const GET_MY_PORTFOLIO = gql`
  query GetMyPortfolio {
    myPortfolio {
      projects {
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
        rating
        featured
        gallery {
          url
          caption
        }
        createdAt
        updatedAt
      }
      skills {
        id
        name
        icon
        level
        yearsOfExperience
        projects
      }
      certifications {
        id
        name
        issuer
        date
        credentialUrl
        credentialId
        expiresAt
        image
      }
      githubRepos {
        id
        name
        description
        url
        stars
        forks
        language
        topics
        imported
        updatedAt
      }
      services {
        id
        title
        description
        price
        currency
        deliveryTime
        featured
      }
      education {
        id
        degree
        institution
        field
        startYear
        endYear
        grade
        description
      }
      experience {
        id
        title
        company
        location
        startDate
        endDate
        current
        description
        achievements
      }
      languages {
        id
        name
        proficiency
      }
      socialLinks {
        linkedin
        github
        twitter
        behance
        dribbble
        website
      }
      stats {
        totalViews
        totalLikes
        totalComments
        lastUpdated
      }
      settings {
        isPublic
        allowMessages
        showEmail
        showPhone
        theme
        layout
      }
    }
  }
`;

// ==================== PROFILE QUERIES ====================

export const GET_EMPLOYEE_PROFILE = gql`
  query GetEmployeeProfile {
    employeeProfile {
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
      totalEarnings
      completedProjects
      skills
      languages
      joinedAt
      socialLinks {
        linkedin
        github
        twitter
        behance
        dribbble
        website
      }
    }
  }
`;



export const GET_MY_CONVERSATIONS = gql`
  query GetMyConversations {
    myConversations {
      id
      participants {
        id
        name
        image
        roles
        isOnline
        lastActive
        chatStatus
      }
      lastMessage {
        id
        content
        senderId
        read
        createdAt
      }
      unreadCount
      updatedAt
      project {
        id
        title
      }
    }
  }
`;



export const GET_CONVERSATION = gql`
  query GetConversation($id: ID!) {
    conversation(id: $id) {
      id
      participants {
        id
        name
        image
        roles
        isOnline
        lastActive
        lastSeen
        chatStatus
      }
      messages {
        id
        content
        senderId
        sender {
          id
          name
          image
          isOnline
        }
        read
        readAt
        createdAt
        attachments {
          name
          url
          type
          size
        }
      }
      project {
        id
        title
        status
      }
    }
  }
`;

export const GET_CONVERSATION_BY_PROJECT = gql`
  query GetConversationByProject($projectId: ID!) {
    conversationByProject(projectId: $projectId) {
      id
      participants {
        id
        name
        image
        isOnline
      }
      lastMessage {
        content
        createdAt
      }
    }
  }
`;

export const GET_USER_ONLINE_STATUS = gql`
  query GetUserOnlineStatus($userId: ID!) {
    getUserOnlineStatus(userId: $userId) {
      id
      isOnline
      lastActive
      chatStatus
    }
  }
`;
export const GET_EMPLOYEE_SETTINGS = gql`
  query GetEmployeeSettings {
    employeeSettings {
      notifications {
        email
        push
        projectUpdates
        newMessages
        earnings
        marketing
      }
      privacy {
        showProfile
        showEarnings
        showProjects
        showContactInfo
        allowMessages
      }
      theme
      language
      timezone
    }
  }
`;

export const SEARCH_USERS = gql`
  query SearchUsers($search: String!, $type: String, $role: String) {
    searchUsers(search: $search, type: $type, role: $role) {
      id
      name
      email
      image
      role
      roles
      isOnline
      lastActive
    }
  }
`;



export const GET_PAYMENT_METHODS = gql`
  query GetPaymentMethods {
    employeePaymentMethods {
      id
      name
      type
      icon
      minAmount
      maxAmount
      fee
      processingTime
      supportedCurrencies
      supportedCountries
    }
  }
`;

export const GET_EMPLOYEE_PAYMENT_SETTINGS = gql`
  query GetEmployeePaymentSettings {
    employeePaymentSettings {
      preferredCurrency
      defaultMethod
      paypalEmail
      bankAccounts {
        id
        accountName
        accountNumber
        bankName
        swiftCode
        iban
        routingNumber
        currency
        country
        isDefault
        verified
      }
      payoneerEmail
      cryptoWallets {
        id
        currency
        address
        network
        isDefault
      }
      autoWithdrawal {
        enabled
        threshold
        method
      }
    }
  }
`;

export const GET_OPPORTUNITIES = gql`
  query GetOpportunities($filter: OpportunityFilterInput, $page: Int, $limit: Int) {
    opportunities(filter: $filter, page: $page, limit: $limit) {
      items {
        ... on Project {
          id
          title
          description
          type: __typename
          source: "project"
          category
          skills
          budget {
            type
            min
            max
            rate
          }
          experience
          location
          isRemote
          proposals
          client {
            id
            name
            company
            rating
          }
          createdAt
          deadline
          status
        }
        ... on Job {
          id
          title
          description
          type: __typename
          source: "job"
          department
          location
          jobType: type
          experience
          salary {
            min
            max
            currency
            isVisible
          }
          skills
          company {
            name
            logo
          }
          postedAt
          deadline
          applications
          status
        }
      }
      totalCount
      totalPages
      currentPage
      counts {
        projects
        jobs
      }
    }
  }
`;

// graphql/employee/queries.ts - أضف هذا الاستعلام

export const GET_OPPORTUNITY_BY_SLUG = gql`
  query GetOpportunityBySlug($slug: String!) {
    opportunityBySlug(slug: $slug) {
      ... on Project {
        id
        title
        description
        source: __typename
        category
        skills
        budget {
          type
          min
          max
          rate
          estimatedHours
          currency
        }
        experience
        location
        isRemote
        proposals
        requirements
        deliverables
        status
        deadline
        createdAt
        client {
          id
          name
          company
          rating
          image
          completedProjects
          location
          createdAt
        }
        clientId
        attachments {
          name
          url
          type
          size
          uploadedAt
        }
        postedBy {
          id
          name
          email
        }
        contactEmail
        contactPhone
        views
      }
      ... on Job {
        id
        title
        slug
        description
        source: __typename
        department
        location
        type
        experience
        salary {
          min
          max
          currency
          isVisible
        }
        skills
        requirements
        responsibilities
        benefits
        applications
        maxApplications
        status
        deadline
        postedAt
        company {
          name
          logo
          website
          description
        }
        postedBy {
          id
          name
          email
        }
        contactEmail
        contactPhone
        views
        image
        isRemote
      }
    }
  }
`;



// -----------------



// ==================== REGULAR EMPLOYEE QUERIES ====================

export const REGULAR_EMPLOYEE_STATS = gql`
  query RegularEmployeeStats($userId: ID!) {
    regularEmployeeStats(userId: $userId) {
      activeProjects
      completedProjects
      pendingBids
      totalEarnings
      thisMonthEarnings
      averageRating
      successRate
      hoursWorked
      recentProjects {
        id
        title
        client {
          id
          name
          company
          rating
        }
        budget
        status
        progress
        deadline
        hoursWorked
      }
      recentBids {
        id
        projectId
        projectTitle
        amount
        status
        createdAt
        clientName
      }
    }
  }
`;

export const EMPLOYEE_EARNINGS = gql`
  query EmployeeEarnings {
    employeeEarnings {
      total
      available
      pending
      paid
      thisMonth
      lastMonth
      transactions {
        id
        description
        amount
        type
        status
        date
        projectName
      }
    }
  }
`;

export const EMPLOYEE_PROJECTS = gql`
  query EmployeeProjects($status: String) {
    employeeProjects(status: $status) {
      id
      title
      client {
        id
        name
        company
        rating
      }
      budget
      status
      progress
      deadline
      hoursWorked
    }
  }
`;

export const EMPLOYEE_BIDS = gql`
  query EmployeeBids($status: String) {
    employeeBids(status: $status) {
      id
      projectId
      projectTitle
      amount
      status
      createdAt
      clientName
    }
  }
`;

// ==================== HR MANAGER QUERIES ====================

export const HR_STATS = gql`
  query HRStats {
    hrStats {
      totalEmployees
      activeEmployees
      openPositions
      totalApplications
      pendingApplications
      scheduledInterviews
      applicationsThisMonth
      hiredThisMonth
      departments {
        department
        employeeCount
        openPositions
        applications
      }
      recentApplications {
        id
        jobId
        candidate {
          name
          email
          phone
          resume
        }
        status
        submittedAt
        reviewedAt
        notes
      }
      upcomingInterviews {
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
  }
`;

export const HR_APPLICATIONS = gql`
  query HRApplications($status: String, $page: Int, $limit: Int) {
    hrApplications(status: $status, page: $page, limit: $limit) {
      applications {
        id
        jobId
        candidate {
          name
          email
          phone
          resume
        }
        status
        submittedAt
        reviewedAt
        notes
      }
      totalCount
      page
      limit
    }
  }
`;

export const HR_EMPLOYEES = gql`
  query HREmployees($department: String) {
    hrEmployees(department: $department) {
      id
      name
      email
      image
      role
      department
      position
      employeeId
    }
  }
`;

export const HR_INTERVIEWS = gql`
  query HRInterviews($upcoming: Boolean) {
    hrInterviews(upcoming: $upcoming) {
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

// ==================== DEPARTMENT MANAGER QUERIES ====================

export const MANAGER_STATS = gql`
  query ManagerStats {
    managerStats {
      teamSize
      activeProjects
      completedProjects
      teamPerformance
      pendingTasks
      upcomingDeadlines
      budgetUtilized
      totalBudget
      teamMembers {
        id
        name
        position
        avatar
        currentProjects
        performance
        status
        joinDate
      }
      departmentProjects {
        id
        title
        assignedTo
        progress
        deadline
        status
        priority
      }
      recentActivities {
        id
        member
        action
        project
        timestamp
        details
      }
    }
  }
`;

export const MANAGER_TEAM_MEMBERS = gql`
  query ManagerTeamMembers {
    managerTeamMembers {
      id
      name
      position
      avatar
      currentProjects
      performance
      status
      joinDate
    }
  }
`;

export const MANAGER_PROJECTS = gql`
  query ManagerProjects($status: String) {
    managerProjects(status: $status) {
      id
      title
      assignedTo
      progress
      deadline
      status
      priority
    }
  }
`;

export const MANAGER_ACTIVITIES = gql`
  query ManagerActivities($limit: Int) {
    managerActivities(limit: $limit) {
      id
      member
      action
      project
      timestamp
      details
    }
  }
`;

// ==================== SELLER MANAGER QUERIES ====================

export const SELLER_MANAGER_STATS = gql`
  query SellerManagerStats {
    sellerManagerStats {
      totalSellers
      activeSellers
      pendingApprovals
      suspendedSellers
      totalStores
      totalRevenue
      platformCommission
      topSellers {
        id
        businessName
        email
        totalSales
        totalOrders
        joinDate
        status
      }
      recentRegistrations {
        id
        businessName
        email
        submittedAt
        documents
      }
      storesByStatus {
        active
        pending
        suspended
        closed
      }
    }
  }
`;

export const PENDING_SELLERS = gql`
  query PendingSellers {
    pendingSellers {
      id
      businessName
      email
      submittedAt
      documents
    }
  }
`;

export const ALL_STORES = gql`
  query AllStores($status: String) {
    allStores(status: $status) {
      id
      name
      owner {
        id
        businessName
        email
      }
      status
      products
      orders
      revenue
      rating
      openedAt
    }
  }
`;

// ==================== APP MANAGER QUERIES ====================

export const APP_MANAGER_STATS = gql`
  query AppManagerStats {
    appManagerStats {
      totalApps
      pendingReviews
      approvedApps
      rejectedApps
      totalDevelopers
      totalDownloads
      totalRevenue
      topApps {
        id
        name
        developer
        downloads
        rating
        revenue
        status
      }
      recentSubmissions {
        id
        name
        developer
        submittedAt
        category
        version
      }
      appsByStatus {
        pending
        approved
        rejected
        draft
      }
    }
  }
`;

export const PENDING_APPS = gql`
  query PendingApps {
    pendingApps {
      id
      name
      developer
      submittedAt
      category
      version
    }
  }
`;

export const ALL_DEVELOPERS = gql`
  query AllDevelopers {
    allDevelopers {
      id
      name
      email
      appsCount
      status
      joinDate
    }
  }
`;

// ==================== DEVELOPER MANAGER QUERIES ====================

export const DEVELOPER_MANAGER_STATS = gql`
  query DeveloperManagerStats {
    developerManagerStats {
      totalDevelopers
      activeDevelopers
      pendingApprovals
      totalApps
      appsInReview
      teamPerformance
      topDevelopers {
        id
        name
        email
        appsCount
        totalRevenue
        rating
        joinDate
      }
      recentActivities {
        id
        developer
        action
        appName
        timestamp
      }
      skillDistribution {
        skill
        count
      }
    }
  }
`;

export const DEVELOPER_TEAM = gql`
  query DeveloperTeam {
    developerTeam {
      id
      name
      email
      appsCount
      status
      joinDate
    }
  }
`;

export const DEVELOPER_APPS = gql`
  query DeveloperApps($developerId: ID) {
    developersApps(developerId: $developerId) {
      id
      name
      developer {
        id
        name
        email
      }
      status
      version
      downloads
      rating
    }
  }
`;

// ==================== STORE MANAGER QUERIES ====================

export const STORE_MANAGER_STATS = gql`
  query StoreManagerStats {
    storeManagerStats {
      totalStores
      activeStores
      pendingApprovals
      suspendedStores
      totalProducts
      totalOrders
      totalRevenue
      topStores {
        id
        name
        owner
        products
        orders
        revenue
        rating
      }
      recentOpenings {
        id
        name
        owner
        openedAt
        category
      }
      storesByCategory {
        category
        count
      }
    }
  }
`;

export const PENDING_STORES = gql`
  query PendingStores {
    pendingStores {
      id
      name
      owner {
        id
        businessName
        email
      }
      status
      products
      orders
      revenue
      rating
      openedAt
    }
  }
`;

export const ACTIVE_STORES = gql`
  query ActiveStores {
    activeStores {
      id
      name
      owner {
        id
        businessName
        email
      }
      status
      products
      orders
      revenue
      rating
      openedAt
    }
  }
`;

// ==================== FINANCE MANAGER QUERIES ====================

export const FINANCE_MANAGER_STATS = gql`
  query FinanceManagerStats {
    financeManagerStats {
      totalRevenue
      totalExpenses
      netProfit
      pendingPayouts
      processedPayouts
      platformFees
      taxCollected
      revenueByMonth {
        month
        revenue
        expenses
        profit
      }
      pendingWithdrawals {
        id
        seller
        amount
        requestedAt
        method
      }
      recentTransactions {
        id
        description
        amount
        type
        status
        date
        reference
      }
    }
  }
`;

export const PENDING_PAYOUTS = gql`
  query PendingPayouts {
    pendingPayouts {
      id
      seller
      amount
      requestedAt
      method
    }
  }
`;

export const FINANCE_TRANSACTIONS = gql`
  query FinanceTransactions($limit: Int) {
    financeTransactions(limit: $limit) {
      id
      description
      amount
      type
      status
      date
      reference
    }
  }
`;

// ==================== MARKETING MANAGER QUERIES ====================

export const MARKETING_MANAGER_STATS = gql`
  query MarketingManagerStats {
    marketingManagerStats {
      totalCampaigns
      activeCampaigns
      totalImpressions
      totalClicks
      conversionRate
      totalSpent
      totalRevenue
      roi
      topCampaigns {
        id
        name
        impressions
        clicks
        conversions
        spent
        revenue
        roi
      }
      recentCampaigns {
        id
        name
        channel
        status
        startDate
        endDate
        budget
        spent
      }
      performanceByChannel {
        channel
        impressions
        clicks
        conversions
        spent
        revenue
      }
    }
  }
`;

export const ACTIVE_CAMPAIGNS = gql`
  query ActiveCampaigns {
    activeCampaigns {
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

export const CAMPAIGN_PERFORMANCE = gql`
  query CampaignPerformance($campaignId: ID) {
    campaignPerformance(campaignId: $campaignId) {
      id
      name
      metrics
      recommendations
    }
  }
`;

// ==================== APP REVIEWER QUERIES ====================

export const APP_REVIEWER_STATS = gql`
  query AppReviewerStats {
    appReviewerStats {
      pendingReviews
      reviewedToday
      thisWeek
      averageReviewTime
      approvalRate
      rejectionRate
      pendingApps {
        id
        name
        developer
        submittedAt
        category
        version
        priority
      }
      recentReviews {
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

export const PENDING_APP_REVIEWS = gql`
  query PendingAppReviews {
    pendingAppReviews {
      id
      name
      developer
      submittedAt
      category
      version
      priority
    }
  }
`;

export const REVIEWED_APPS = gql`
  query ReviewedApps($limit: Int) {
    reviewedApps(limit: $limit) {
      id
      name
      developer
      reviewedAt
      decision
      timeSpent
    }
  }
`;

// ==================== CONTENT MODERATOR QUERIES ====================

export const CONTENT_MODERATOR_STATS = gql`
  query ContentModeratorStats {
    contentModeratorStats {
      pendingReports
      resolvedToday
      thisWeek
      averageResolutionTime
      reportsByType {
        type
        count
      }
      pendingReportsList {
        id
        contentType
        contentId
        reportedBy
        reason
        reportedAt
        status
        priority
      }
      recentActions {
        id
        action
        contentType
        takenAt
        resolvedBy
      }
    }
  }
`;

export const PENDING_REPORTS = gql`
  query PendingReports {
    pendingReports {
      id
      contentType
      contentId
      reportedBy
      reason
      reportedAt
      status
      priority
    }
  }
`;

export const MODERATOR_ACTIONS = gql`
  query ModeratorActions($limit: Int) {
    moderatorActions(limit: $limit) {
      id
      action
      contentType
      takenAt
      resolvedBy
    }
  }
`;

// ==================== SUPPORT AGENT QUERIES ====================

export const SUPPORT_AGENT_STATS = gql`
  query SupportAgentStats {
    supportAgentStats {
      openTickets
      resolvedToday
      averageResponseTime
      customerSatisfaction
      ticketsByPriority {
        low
        medium
        high
        urgent
      }
      openTicketsList {
        id
        subject
        customer
        status
        priority
        createdAt
        lastUpdated
      }
      recentResolved {
        id
        subject
        customer
        resolvedAt
        satisfaction
      }
    }
  }
`;

export const OPEN_TICKETS = gql`
  query OpenTickets {
    openTickets {
      id
      subject
      customer
      status
      priority
      createdAt
      lastUpdated
    }
  }
`;

export const RESOLVED_TICKETS = gql`
  query ResolvedTickets($limit: Int) {
    resolvedTickets(limit: $limit) {
      id
      subject
      customer
      resolvedAt
      satisfaction
    }
  }
`;

// graphql/employee/queries.ts - أضف هذه الاستعلامات في نهاية الملف

// ==================== ADDITIONAL QUERIES ====================

/**
 * GET_APP - استعلام لجلب تفاصيل تطبيق واحد
 */
export const GET_APP = gql`
  query GetApp($id: ID!) {
    app(id: $id) {
      id
      name
      description
      logoUrl
      categories
      status
      version
      downloads
      rating
      ratingsCount
      developer {
        id
        name
        email
        company
      }
      pricing {
        model
        amount
        currency
        interval
        isFree
      }
      features
      screenshots
      videos {
        url
        position
        size
      }
      images {
        url
        position
        size
      }
      installationGuide
      documentation
      supportEmail
      createdAt
      updatedAt
      lastUpdated
      reviews {
        id
        rating
        comment
        user {
          name
          image
        }
        createdAt
      }
    }
  }
`;

/**
 * GET_PAYOUT - استعلام لجلب تفاصيل دفعة مالية واحدة
 */
export const GET_PAYOUT = gql`
  query GetPayout($id: ID!) {
    payout(id: $id) {
      id
      amount
      currency
      status
      seller {
        id
        businessName
        email
        avatar
      }
      paymentMethod {
        id
        type
        providerName
        accountDetails
      }
      fees {
        platformFee
        processingFee
        taxFee
        totalFees
        netAmount
      }
      timeline {
        id
        type
        title
        description
        amount
        createdAt
        createdBy
      }
      relatedOrders {
        id
        orderNumber
        amount
        status
        createdAt
      }
      riskScore {
        score
        level
        flags {
          type
          severity
          description
        }
      }
      createdAt
      scheduledAt
      processedAt
      estimatedArrival
      transactionId
      adminNotes {
        id
        content
        type
        createdBy
        createdAt
      }
    }
  }
`;

/**
 * GET_STORE - استعلام لجلب تفاصيل متجر واحد
 */
export const GET_STORE = gql`
  query GetStore($id: ID!, $slug: String) {
    store(id: $id, slug: $slug) {
      id
      slug
      name
      description
      logo
      coverImage
      seller {
        id
        businessName
        email
        phone
        avatar
        rating
        verified
        joinDate
      }
      status
      isActive
      isPublished
      isLive
      publishedAt
      createdAt
      updatedAt
      settings {
        currency
        timezone
        language
        dateFormat
        weightUnit
        dimensionUnit
        maintenanceMode
        comingSoon
        notifications {
          email
          push
          sms
        }
        privacy {
          showEmail
          showPhone
          showAddress
        }
        shipping {
          methods
          freeShippingThreshold
          internationalShipping
        }
      }
      stats {
        totalProducts
        totalOrders
        totalRevenue
        totalVisitors
        conversionRate
        averageRating
      }
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
        whatsapp
      }
      contact {
        email
        phone
        address
        hours {
          monday
          tuesday
          wednesday
          thursday
          friday
          saturday
          sunday
        }
      }
      seo {
        title
        description
        keywords
        image
      }
      urls {
        store
        preview
        admin
        api
        assets
        edit
        dashboard
        design
        settings
        analytics
      }
      theme {
        id
        name
        slug
        isActive
      }
      customDomain
      lastSynced
      syncedProducts
      syncedOrders
      analytics {
        totalViews
        monthlyVisitors
        topProducts {
          id
          name
          views
          sales
        }
      }
    }
  }
`;

/**
 * GET_CONTENT - استعلام لجلب محتوى نصي
 */
export const GET_CONTENT = gql`
  query GetContent($storeId: ID!, $sectionId: ID!) {
    textContent(storeId: $storeId, sectionId: $sectionId) {
      id
      content
      storeId
      sectionId
      updatedAt
    }
  }
`;

/**
 * GET_TICKET - استعلام لجلب تفاصيل تذكرة دعم واحدة
 */
export const GET_TICKET = gql`
  query GetTicket($id: ID!) {
    ticket(id: $id) {
      id
      ticketNumber
      subject
      description
      status
      priority
      category
      customer {
        id
        name
        email
        image
        phone
      }
      assignedTo {
        id
        name
        email
        image
      }
      messages {
        id
        content
        sender {
          id
          name
          email
          role
        }
        attachments {
          name
          url
          type
          size
        }
        createdAt
        isInternal
      }
      createdAt
      updatedAt
      resolvedAt
      firstResponseAt
      satisfaction {
        rating
        comment
        ratedAt
      }
      tags
      metadata
    }
  }
`;