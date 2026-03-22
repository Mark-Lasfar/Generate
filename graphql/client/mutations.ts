// graphql/client/mutations.ts
import { gql } from '@apollo/client';

// ==================== PROJECT MUTATIONS ====================

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      success
      message
      data {
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
        deadline
        experience
        location
        isRemote
        attachments {
          name
          url
          type
          size
        }
        createdAt
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $input: UpdateProjectInput!) {
    updateProject(id: $id, input: $input) {
      success
      message
      data {
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
        deadline
        experience
        location
        isRemote
        updatedAt
      }
    }
  }
`;

export const UPDATE_PROJECT_STATUS = gql`
  mutation UpdateProjectStatusClient($id: ID!, $status: ProjectStatus!) {
    clientupdateProjectStatus(id: $id, status: $status) {
      success
      message
      data {
        id
        title
        status
        updatedAt
      }
    }
  }
`;

export const ACCEPT_BID = gql`
  mutation AcceptBid($projectId: ID!, $bidId: ID!) {
    acceptBid(projectId: $projectId, bidId: $bidId) {
      success
      message
      data {
        id
        projectId
        employeeId
        amount
        deliveryTime
        status
        acceptedAt
        startDate
        milestones {
          id
          title
          amount
          dueDate
          status
        }
      }
    }
  }
`;

export const REJECT_BID = gql`
  mutation RejectBid($bidId: ID!) {
    rejectBid(bidId: $bidId) {
      success
      message
    }
  }
`;

// ==================== PAYMENT METHODS MUTATIONS ====================

export const ADD_PAYMENT_METHOD = gql`
  mutation AddPaymentMethod($input: PaymentMethodInput!) {
    addPaymentMethod(input: $input) {
      success
      message
      data {
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
        createdAt
      }
    }
  }
`;

export const REMOVE_PAYMENT_METHOD = gql`
  mutation RemovePaymentMethod($id: ID!) {
    removePaymentMethod(id: $id) {
      success
      message
    }
  }
`;

export const SET_DEFAULT_PAYMENT_METHOD = gql`
  mutation SetDefaultPaymentMethod($id: ID!) {
    setDefaultPaymentMethod(id: $id) {
      success
      message
      data {
        id
        type
        last4
        isDefault
      }
    }
  }
`;

export const VERIFY_PAYMENT_METHOD = gql`
  mutation VerifyPaymentMethod($id: ID!) {
    verifyPaymentMethod(id: $id) {
      success
      message
    }
  }
`;

// ==================== PROFILE MUTATIONS ====================

export const UPDATE_CLIENT_PROFILE = gql`
  mutation UpdateClientProfile($input: ClientProfileInput!) {
    updateClientProfile(input: $input) {
      success
      message
      data {
        id
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
        notifications {
          email
          push
          projectUpdates
          newBids
          messages
        }
        updatedAt
      }
    }
  }
`;

export const UPDATE_CLIENT_SETTINGS = gql`
  mutation UpdateClientSettings($input: ClientSettingsInput!) {
    updateClientSettings(input: $input) {
      success
      message
      data {
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
        }
        privacy {
          showProfile
          showCompanyName
          showEmail
          showPhone
        }
      }
    }
  }
`;

// ==================== PAYMENT MUTATIONS ====================

export const CREATE_PAYMENT = gql`
  mutation CreatePayment($input: CreatePaymentInput!) {
    createPayment(input: $input) {
      success
      message
      data {
        id
        projectId
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
      }
    }
  }
`;

export const RELEASE_PAYMENT = gql`
  mutation ReleasePayment($milestoneId: ID!) {
    releasePayment(milestoneId: $milestoneId) {
      success
      message
      data {
        id
        status
        paidAt
        transactionId
      }
    }
  }
`;

export const REQUEST_REFUND = gql`
  mutation RequestRefund($paymentId: ID!, $reason: String!) {
    requestRefund(paymentId: $paymentId, reason: $reason) {
      success
      message
      data {
        id
        status
        refundRequestedAt
        refundReason
      }
    }
  }
`;

// ==================== DISPUTE MUTATIONS ====================
export const CREATE_DISPUTE = gql`
  mutation CreateDispute($input: DisputeInput!) {
    createDispute(input: $input) {
      success
      message
      data {
        id
        projectId
        contractId
        reason
        description
        status
        createdAt
        evidence {
          type
          url
          description
          uploadedAt
          uploadedBy
        }
      }
    }
  }
`;

export const ADD_DISPUTE_EVIDENCE = gql`
  mutation AddDisputeEvidence($disputeId: ID!, $input: DisputeEvidenceInput!) {
    addDisputeEvidence(disputeId: $disputeId, input: $input) {
      success
      message
      data {
        id
        type
        url
        description
        uploadedAt
      }
    }
  }
`;


export const ADD_DISPUTE_MESSAGE = gql`
  mutation AddDisputeMessage($disputeId: ID!, $content: String!) {
    addDisputeMessage(disputeId: $disputeId, content: $content) {
      success
      message
      data {
        id
        content
        userId
        userName
        createdAt
        attachments {
          type
          url
          description
        }
      }
    }
  }
`;