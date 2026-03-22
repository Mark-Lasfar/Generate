// graphql/client/queries.ts
import { gql } from '@apollo/client';

// ==================== DASHBOARD QUERIES ====================

export const GET_CLIENT_DASHBOARD = gql`
  query GetClientDashboard($clientId: ID!) {
    clientStats(clientId: $clientId) {
      totalProjects
      activeProjects
      completedProjects
      totalSpent
      openBids
      unreadMessages
      averageProjectCost
      pendingPayments
    }
    
    recentProjects(clientId: $clientId, limit: 5) {
      id
      title
      description
      status
      budget {
        type
        min
        max
        rate
      }
      proposals
      createdAt
      deadline
    }
    
    recentBids(clientId: $clientId, limit: 5) {
      id
      projectId
      project {
        id
        title
      }
      employee {
        id
        name
        image
        rating
        skills
      }
      amount
      deliveryTime
      coverLetter
      status
      createdAt
    }
    
    unreadMessagesCount(clientId: $clientId)
  }
`;

// ==================== PROJECTS QUERIES ====================

export const GET_CLIENT_PROJECTS = gql`
  query GetClientProjects($clientId: ID!) {
    clientProjects(clientId: $clientId) {
      id
      title
      description
      status
      budget {
        type
        min
        max
        rate
      }
      category
      skills
      proposals
      views
      deadline
      experience
      location
      isRemote
      createdAt
      updatedAt
      attachments {
        name
        url
        type
        size
      }
    }
  }
`;

export const GET_CLIENT_PROJECT = gql`
  query GetClientProject($id: ID!) {
    clientProject(id: $id) {
      id
      title
      description
      status
      budget {
        type
        min
        max
        rate
      }
      category
      skills
      proposals
      views
      deadline
      experience
      location
      isRemote
      createdAt
      updatedAt
      attachments {
        name
        url
        type
        size
        uploadedAt
      }
      assignedTo {
        id
        name
        image
        email
        rating
        completedProjects
        skills
      }
      activities {
        id
        description
        timestamp
        type
        userId
      }
    }
  }
`;

export const GET_PROJECT_BIDS = gql`
  query GetProjectBids($projectId: ID!) {
    projectBids(projectId: $projectId) {
      id
      projectId
      employee {
        id
        name
        image
        title
        rating
        completedProjects
        skills
        hourlyRate
        location
        memberSince
      }
      amount
      deliveryTime
      coverLetter
      status
      createdAt
      attachments {
        name
        url
        type
        size
      }
    }
    
    project(id: $projectId) {
      id
      title
      budget {
        type
        min
        max
      }
      status
    }
  }
`;

export const GET_PROJECT_BID_DETAILS = gql`
  query GetProjectBidDetails($projectId: ID!, $bidId: ID!) {
    projectBid(projectId: $projectId, bidId: $bidId) {
      id
      projectId
      employee {
        id
        name
        image
        title
        bio
        rating
        completedProjects
        skills
        hourlyRate
        location
        memberSince
        portfolio {
          id
          title
          description
          image
          category
        }
        reviews {
          id
          rating
          comment
          from {
            name
            image
          }
          createdAt
        }
      }
      amount
      deliveryTime
      coverLetter
      status
      createdAt
      attachments {
        name
        url
        type
        size
      }
    }
    
    project(id: $projectId) {
      id
      title
      budget {
        type
        min
        max
      }
      status
    }
  }
`;

export const GET_MY_OPEN_PROJECTS = gql`
  query GetMyOpenProjects($clientId: ID!) {
    myOpenProjects(clientId: $clientId) {
      id
      title
      budget {
        type
        min
        max
        rate
      }
      proposals
      deadline
      createdAt
      skills
    }
  }
`;

export const GET_MY_ACTIVE_PROJECTS = gql`
  query GetMyActiveProjects($clientId: ID!) {
    myActiveProjects(clientId: $clientId) {
      id
      title
      assignedTo {
        id
        name
        image
        rating
      }
      budget {
        type
        min
        max
        rate
      }
      progress
      deadline
      startedAt
      milestones {
        id
        title
        status
        dueDate
      }
    }
  }
`;

export const GET_MY_COMPLETED_PROJECTS = gql`
  query GetMyCompletedProjects($clientId: ID!) {
    myCompletedProjects(clientId: $clientId) {
      id
      title
      assignedTo {
        id
        name
        image
      }
      budget {
        type
        amount
      }
      completedAt
      totalPaid
      review {
        rating
        comment
        createdAt
      }
    }
  }
`;

// ==================== PAYMENTS QUERIES ====================

export const GET_CLIENT_PAYMENTS = gql`
  query GetClientPayments($clientId: ID!) {
    clientPaymentStats(clientId: $clientId) {
      totalSpent
      pendingPayments
      completedPayments
      averageProjectCost
      thisMonth
      lastMonth
      byMethod {
        method
        amount
        count
      }
    }
    
    recentTransactionsclient(clientId: $clientId, limit: 20) {
      id
      projectId
      project {
        id
        title
      }
      amount
      type
      status
      description
      date
      method
      receipt {
        url
        number
      }
    }
    
    upcomingPayments(clientId: $clientId) {
      id
      projectId
      project {
        title
      }
      amount
      dueDate
      milestone
    }
  }
`;

export const GET_PAYMENT_METHODS = gql`
  query GetPaymentMethods {
    paymentMethodsclient {
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
      requiredFields {
        name
        type
        label
        placeholder
        required
      }
    }
  }
`;

export const GET_CLIENT_PAYMENT_METHODS = gql`
  query GetClientPaymentMethods {
    clientPaymentMethods {
      id
      type
      last4
      cardHolder
      expiry
      bankName
      accountNumber
      routingNumber
      email
      isDefault
      verified
      verifiedAt
      createdAt
    }
  }
`;

export const GET_PAYMENT_HISTORY = gql`
  query GetPaymentHistory($clientId: ID!, $page: Int, $limit: Int) {
    paymentHistory(clientId: $clientId, page: $page, limit: $limit) {
      payments {
        id
        projectId
        project {
          title
        }
        amount
        currency
        method
        status
        transactionId
        paidAt
        receipt {
          url
          number
        }
        description
      }
      totalCount
      totalPages
      currentPage
    }
  }
`;

export const GET_INVOICES = gql`
  query GetInvoices($clientId: ID!, $status: String) {
    invoices(clientId: $clientId, status: $status) {
      id
      number
      projectId
      project {
        title
      }
      amount
      currency
      status
      issuedAt
      dueAt
      paidAt
      items {
        description
        quantity
        unitPrice
        amount
      }
      pdfUrl
    }
  }
`;

// ==================== PROFILE QUERIES ====================

export const GET_CLIENT_PROFILE = gql`
  query GetClientProfile {
    clientProfile {
      id
      userId
      companyName
      companySize
      industry
      website
      bio
      avatar
      location
      phone
      taxId
      businessType
      paymentTerms
      verified
      verifiedAt
      createdAt
      updatedAt
      notifications {
        email
        push
        projectUpdates
        newBids
        messages
      }
      stats {
        totalProjects
        totalSpent
        averageRating
        completionRate
        memberSince
      }
    }
  }
`;

export const GET_CLIENT_SETTINGS = gql`
  query GetClientSettings {
    clientSettings {
      language
      timezone
      currency
      dateFormat
      notifications {
        email
        push
        projectUpdates
        newBids
        messages
        marketing
      }
      privacy {
        showProfile
        showCompanyName
        showEmail
        showPhone
        showLocation
      }
      theme
    }
  }
`;

export const GET_CLIENT_NOTIFICATIONS = gql`
  query GetClientNotifications($page: Int, $limit: Int) {
    clientNotifications(page: $page, limit: $limit) {
      notifications {
        id
        type
        title
        message
        data
        read
        createdAt
      }
      totalCount
      unreadCount
    }
  }
`;

// ==================== CONTRACT QUERIES ====================

export const GET_CLIENT_CONTRACTS = gql`
  query GetClientContracts($clientId: ID!, $status: String) {
    clientContracts(clientId: $clientId, status: $status) {
      id
      projectId
      project {
        id
        title
      }
      employee {
        id
        name
        image
        rating
        email
        phone
      }
      amount
      currency
      startDate
      endDate
      status
      milestones {
        id
        title
        description
        amount
        dueDate
        status
        completedAt
      }
      payments {
        id
        amount
        status
        paidAt
        transactionId
      }
    }
  }
`;

export const GET_CLIENT_CONTRACT = gql`
  query GetClientContract($id: ID!) {
    clientContract(id: $id) {
      id
      projectId
      project {
        id
        title
        description
      }
      employee {
        id
        name
        image
        email
        phone
        rating
        skills
      }
      amount
      currency
      startDate
      endDate
      status
      milestones {
        id
        title
        description
        amount
        dueDate
        status
        completedAt
        deliverables {
          name
          url
          type
          uploadedAt
        }
      }
      payments {
        id
        amount
        status
        paidAt
        transactionId
      }
      terms
      signedAt
      signedBy
    }
  }
`;

// ==================== DISPUTE QUERIES ====================

export const GET_CLIENT_DISPUTES = gql`
  query GetClientDisputes($clientId: ID!) {
    clientDisputes(clientId: $clientId) {
      id
      projectId
      project {
        title
      }
      employee {
        name
        image
      }
      reason
      description
      status
      createdAt
      resolvedAt
    }
  }
`;

export const GET_CLIENT_DISPUTE = gql`
  query GetClientDispute($id: ID!) {
    clientDispute(id: $id) {
      id
      projectId
      project {
        id
        title
        description
      }
      employee {
        id
        name
        image
        email
      }
      reason
      description
      status
      createdAt
      updatedAt
      resolvedAt
      resolution
      evidence {
        id
        type
        url
        description
        uploadedAt
        uploadedBy
      }
      messages {
        id
        content
        userId
        userName
        createdAt
        attachments {
          url
          type
        }
      }
    }
  }
`;

// ==================== REVIEW QUERIES ====================

export const GET_CLIENT_REVIEWS = gql`
  query GetClientReviews($clientId: ID!) {
    clientReviews(clientId: $clientId) {
      id
      projectId
      project {
        title
      }
      from {
        id
        name
        image
      }
      rating
      comment
      createdAt
    }
  }
`;

export const GET_PENDING_REVIEWS = gql`
  query GetPendingReviews($clientId: ID!) {
    pendingReviews(clientId: $clientId) {
      id
      projectId
      project {
        title
      }
      employee {
        id
        name
        image
      }
      completedAt
    }
  }
`;