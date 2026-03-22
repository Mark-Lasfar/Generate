// graphql/jobs/mutations.ts
import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
  mutation CreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      success
      message
      data {
        id
        title
        slug
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
        description
        requirements
        responsibilities
        benefits
        skills
        image
        deadline
        status
        maxApplications
        isRemote
        company {
          name
          logo
          website
          description
        }
        contactEmail
        contactPhone
        createdAt
      }
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob($id: ID!, $input: UpdateJobInput!) {
    updateJob(id: $id, input: $input) {
      success
      message
      data {
        id
        title
        slug
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
        description
        requirements
        responsibilities
        benefits
        skills
        image
        deadline
        status
        maxApplications
        isRemote
        company {
          name
          logo
          website
          description
        }
        contactEmail
        contactPhone
        updatedAt
      }
    }
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($id: ID!) {
    deleteJob(id: $id) {
      success
      message
      data {
        id
      }
    }
  }
`;

export const BULK_JOB_ACTION = gql`
  mutation BulkJobAction($ids: [ID!]!, $action: String!) {
    bulkJobAction(ids: $ids, action: $action) {
      success
      message
      affectedCount
    }
  }
`;

export const APPLY_FOR_JOB = gql`
  mutation ApplyForJob($input: JobApplicationInput!) {
    applyForJob(input: $input) {
      success
      message
      data {
        id
        status
        createdAt
      }
    }
  }
`;

export const WITHDRAW_APPLICATION = gql`
  mutation WithdrawApplication($applicationId: ID!) {
    withdrawApplication(applicationId: $applicationId) {
      success
      message
    }
  }
`;

export const UPDATE_APPLICATION_STATUS = gql`
  mutation UpdateApplicationStatus($input: UpdateApplicationStatusInput!) {
    updateApplicationStatus(input: $input) {
      success
      message
      data {
        id
        status
        reviewedAt
        reviewedBy {
          id
          name
        }
        interviewDate
        interviewNotes
        rejectionReason
      }
    }
  }
`;

export const ADD_APPLICATION_NOTE = gql`
  mutation AddApplicationNote($applicationId: ID!, $note: String!) {
    addApplicationNote(applicationId: $applicationId, note: $note) {
      success
      message
      data {
        id
        notes
      }
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      success
      message
      data {
        id
        employeeId
        department
        position
        startDate
        status
        permissions
        roles
        user {
          id
          name
          email
        }
      }
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $input: UpdateEmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      success
      message
      data {
        id
        department
        position
        status
        permissions
        roles
        updatedAt
      }
    }
  }
`;

export const TERMINATE_EMPLOYEE = gql`
  mutation TerminateEmployee($id: ID!, $reason: String!) {
    terminateEmployee(id: $id, reason: $reason) {
      success
      message
      data {
        id
        status
        endDate
      }
    }
  }
`;

export const UPDATE_EMPLOYEE_PERMISSIONS = gql`
  mutation UpdateEmployeePermissions($id: ID!, $permissions: [String!]!) {
    updateEmployeePermissions(id: $id, permissions: $permissions) {
      success
      message
      data {
        id
        permissions
        roles
      }
    }
  }
`;

export const ASSIGN_MANAGER = gql`
  mutation AssignManager($employeeId: ID!, $managerId: ID!) {
    assignManager(employeeId: $employeeId, managerId: $managerId) {
      success
      message
      data {
        id
        manager {
          id
          user {
            name
          }
        }
      }
    }
  }
`;

// _____________________________


export const PROCESS_SALARY = gql`
  mutation ProcessSalary($input: ProcessSalaryInput!) {
    processSalary(input: $input) {
      success
      message
      data {
        id
        netSalary
        paymentDate
        paymentStatus
        receipt {
          url
          generatedAt
        }
      }
    }
  }
`;

export const UPDATE_SALARY_STATUS = gql`
  mutation UpdateSalaryStatus($id: ID!, $status: PaymentStatus!) {
    updateSalaryStatus(id: $id, status: $status) {
      success
      message
      data {
        id
        paymentStatus
        paymentDate
      }
    }
  }
`;

export const GENERATE_SALARY_RECEIPT = gql`
  mutation GenerateSalaryReceipt($id: ID!) {
    generateSalaryReceipt(id: $id) {
      success
      message
      url
    }
  }
`;

export const BULK_PROCESS_SALARIES = gql`
  mutation BulkProcessSalaries($departmentId: ID, $month: Int!, $year: Int!) {
    bulkProcessSalaries(departmentId: $departmentId, month: $month, year: $year) {
      success
      message
      processedCount
      failedCount
      errors
    }
  }
`;




export const BULK_IMPORT_JOBS = gql`
  mutation BulkImportJobs($jobs: [JobImportInput!]!) {
    bulkImportJobs(jobs: $jobs) {
      success
      message
      imported
      failed
      errors
    }
  }
`;

export const UPDATE_RECRUITMENT_SETTINGS = gql`
  mutation UpdateRecruitmentSettings($input: RecruitmentSettingsInput!) {
    updateRecruitmentSettings(input: $input) {
      success
      message
      data {
        companyName
        companyWebsite
        allowApplications
        requireCoverLetter
        maxApplicationsPerUser
        applicationDeadlineDays
        sendApplicationConfirmation
        sendStatusUpdateEmails
        sendInterviewEmails
        emailSignature
        allowedResumeTypes
        maxResumeSize
        allowSelfScheduling
        interviewDuration
        bufferTime
        notifyHRonApplication
        notifyManageronApplication
        notifyOnStatusChange
        keepApplicationsForDays
        anonymizeRejectedApplications
        calendarIntegration
        atsIntegration
        customApplicationFields {
          name
          type
          required
          options
        }
        updatedAt
      }
    }
  }
`;