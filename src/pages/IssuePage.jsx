import React from 'react'
import AddIssueBooks from '../components/issue books/AddIssueBook'
import IssueBookTable from '../components/issue books/IssueBookTable'

export default function IssuePage() {
  return (
    <div>
        <AddIssueBooks />
        <IssueBookTable />
    </div>
  )
}
