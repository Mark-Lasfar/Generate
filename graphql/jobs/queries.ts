// graphql/jobs/queries.ts
import { gql } from '@apollo/client';

export const GET_JOBS = gql`
  query GetJobs($filter: JobFilterInput, $sort: JobSortInput, $page: Int, $limit: Int) {
    jobs(filter: $filter, sort: $sort, page: $page, limit: $limit) {
      jobs {
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
        postedAt
        deadline
        status
        views
        applications
        maxApplications
        isRemote
        company {
          name
          logo
          website
          description
        }
      }
      totalCount
      totalPages
      currentPage
    }
  }
`;

export const GET_JOB_BY_SLUG = gql`
  query GetJobBySlug($slug: String!) {
    jobBySlug(slug: $slug) {
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
      postedBy {
        id
        name
        email
      }
      postedAt
      deadline
      status
      views
      applications
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
    }
  }
`;

export const GET_MY_APPLICATIONS = gql`
  query GetMyApplications($status: ApplicationStatus) {
    myJobApplications(status: $status) {
      id
      jobId
      job {
        id
        title
        slug
        company {
          name
          logo
        }
        location
        type
      }
      status
      personalInfo {
        fullName
        email
      }
      createdAt
      reviewedAt
      interviewDate
      rejectionReason
    }
  }
`;

export const GET_ADMIN_JOBS = gql`
  query GetAdminJobs($filter: AdminJobFilterInput, $sort: JobSortInput, $page: Int, $limit: Int) {
    adminJobs(filter: $filter, sort: $sort, page: $page, limit: $limit) {
      jobs {
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
        skills
        image
        postedBy {
          id
          name
          email
        }
        postedAt
        deadline
        status
        views
        applications
        maxApplications
        isRemote
        company {
          name
          logo
        }
      }
      stats {
        total
        active
        draft
        paused
        closed
        totalApplications
        avgViews
      }
    }
  }
`;

export const GET_ADMIN_APPLICATIONS = gql`
  query GetAdminApplications($jobId: ID, $status: ApplicationStatus, $page: Int, $limit: Int) {
    adminJobApplications(jobId: $jobId, status: $status, page: $page, limit: $limit) {
      applications {
        id
        jobId
        job {
          id
          title
          slug
          department
        }
        userId
        user {
          id
          name
          email
          image
        }
        status
        personalInfo {
          fullName
          email
          phone
          location
          portfolio
          linkedin
          github
        }
        resume {
          url
          filename
          uploadDate
        }
        coverLetter
        skills
        interviewNotes
        createdAt
        reviewedAt
        interviewDate
        rejectionReason
      }
      totalCount
      stats {
        total
        pending
        reviewed
        shortlisted
        accepted
        rejected
      }
    }
  }
`;

export const GET_ADMIN_APPLICATION = gql`
  query GetAdminApplication($id: ID!) {
    adminJobApplication(id: $id) {
      id
      jobId
      job {
        id
        title
        slug
        department
        company {
          name
        }
      }
      userId
      user {
        id
        name
        email
        image
        phone
        profile {
          nickname
          avatar
          skills
          education {
            degree
            institution
            year
          }
          experience {
            company
            position
            duration
          }
        }
      }
      status
      personalInfo {
        fullName
        email
        phone
        location
        portfolio
        linkedin
        github
      }
      resume {
        url
        filename
        uploadDate
      }
      coverLetter
      answers {
        question
        answer
      }
      education {
        degree
        institution
        year
      }
      experience {
        company
        position
        startDate
        endDate
        description
      }
      skills
      notes
      reviewedBy {
        id
        name
      }
      reviewedAt
      rejectionReason
      interviewDate
      interviewNotes
      offerDate
      offerAccepted
      createdAt
      updatedAt
    }
  }
`;

export const GET_EMPLOYEES = gql`
  query GetEmployees($department: String, $status: EmployeeStatus) {
    employees(department: $department, status: $status) {
      id
      userId
      user {
        id
        name
        email
        image
      }
      jobId
      job {
        id
        title
        department
      }
      employeeId
      department
      position
      startDate
      status
      permissions
      roles
      salary {
        amount
        currency
        paymentMethod
      }
      workSchedule {
        days
        hours
        timezone
      }
      createdAt
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    employee(id: $id) {
      id
      userId
      user {
        id
        name
        email
        image
        phone
        profile {
          nickname
          avatar
          skills
          education {
            degree
            institution
            year
          }
          experience {
            company
            position
            duration
          }
        }
      }
      jobId
      job {
        id
        title
        department
        description
      }
      employeeId
      department
      position
      startDate
      endDate
      status
      permissions
      roles
      manager {
        id
        user {
          name
          email
        }
      }
      salary {
        amount
        currency
        paymentMethod
      }
      bankDetails {
        accountName
        accountNumber
        bankName
        swiftCode
      }
      documents {
        name
        url
        type
        uploadDate
      }
      emergencyContact {
        name
        relationship
        phone
      }
      workSchedule {
        days
        hours
        timezone
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_EMPLOYEE_BY_USER_ID = gql`
  query GetEmployeeByUserId($userId: ID!) {
    employeeByUserId(userId: $userId) {
      id
      employeeId
      department
      position
      startDate
      status
      permissions
      roles
      job {
        id
        title
        department
      }
      salary {
        amount
        currency
        paymentMethod
      }
      emergencyContact {
        name
        relationship
        phone
      }
      workSchedule {
        days
        hours
        timezone
      }
    }
  }
`;

export const GET_JOB_STATS = gql`
  query GetJobStats {
    adminJobs(limit: 1) {
      stats {
        total
        active
        draft
        paused
        closed
        totalApplications
        avgViews
      }
    }
  }
`;


// _____________



export const GET_MY_SALARIES = gql`
  query GetMySalaries($limit: Int, $page: Int) {
    mySalaries(limit: $limit, page: $page) {
      salaries {
        id
        baseSalary {
          amount
          currency
          paymentMethod
          frequency
        }
        bonuses {
          performanceBonus
          projectBonus
          overtime
          commission
        }
        deductions {
          tax
          insurance
          loans
          absences
          other
        }
        netSalary
        paymentDate
        paymentStatus
        receipt {
          url
          generatedAt
        }
        period {
          start
          end
        }
        createdAt
      }
      totalCount
      totalPages
      currentPage
      stats {
        totalEarned
        totalPaid
        averageSalary
        lastPayment
        nextPayment
        yearlyTotal
        monthlyAverage
      }
    }
  }
`;

export const GET_EMPLOYEE_SALARIES = gql`
  query GetEmployeeSalaries($employeeId: ID!) {
    employeeSalaries(employeeId: $employeeId) {
      id
      baseSalary {
        amount
        currency
        paymentMethod
        frequency
      }
      bonuses {
        performanceBonus
        projectBonus
        overtime
        commission
      }
      deductions {
        tax
        insurance
        loans
        absences
        other
      }
      netSalary
      paymentDate
      paymentStatus
      receipt {
        url
        generatedAt
      }
      period {
        start
        end
      }
      createdAt
    }
  }
`;

export const GET_SALARY = gql`
  query GetSalary($id: ID!) {
    salary(id: $id) {
      id
      employeeId
      userId
      baseSalary {
        amount
        currency
        paymentMethod
        frequency
      }
      bonuses {
        performanceBonus
        projectBonus
        overtime
        commission
      }
      deductions {
        tax
        insurance
        loans
        absences
        other
      }
      netSalary
      paymentDate
      paymentStatus
      paymentReference
      receipt {
        url
        generatedAt
      }
      period {
        start
        end
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_SALARY_STATS = gql`
  query GetSalaryStats($employeeId: ID) {
    salaryStats(employeeId: $employeeId) {
      totalEarned
      totalPaid
      averageSalary
      lastPayment
      nextPayment
      yearlyTotal
      monthlyAverage
    }
  }
`;



export const GET_JOB_BY_ID = gql`
  query GetJobById($id: ID!) {
    job(id: $id) {
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
      postedBy {
        id
        name
        email
      }
      postedAt
      deadline
      status
      views
      applications
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
      updatedAt
    }
  }
`;