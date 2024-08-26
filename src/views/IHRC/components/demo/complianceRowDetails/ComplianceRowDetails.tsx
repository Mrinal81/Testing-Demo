
// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import AdaptableCard from '@/components/shared/AdaptableCard'
// import Badge from '@/components/ui/Badge'
// import { Button } from '@/components/ui'

// interface DataRow {
//   Compliance_Id: number;
//   Legislation: string;
//   Compliance_Categorization: string;
//   Compliance_Header: string;
//   Compliance_Description: string;
//   Penalty_Description: string;
//   Compliance_Applicability: string;
//   Bare_Act_Text: string;
//   Compliance_Clause: string;
//   Compliance_Type: string;
//   Compliance_Frequency: string;
//   Compliance_Statutory_Authority: string;
//   Approval_Required: string;
//   Criticality: string;
//   Penalty_Type: string;
//   Default_Due_Date: string;
//   First_Due_Date: string;
//   Due_Date: string;
//   Scheduled_Frequency: string;
//   Proof_Of_Compliance_Mandatory: string;
// }

// const categorizationColor: Record<string, { label: string; dotClass: string; textClass: string }> = {
//   'LICENSE / REGISTRATION': {
//     label: 'License / Registration',
//     dotClass: 'bg-emerald-500',
//     textClass: 'text-emerald-500',
//   },
//   // Add more categories as needed
// }

// const ComplianceRowDetails = () => {
//   const location = useLocation()
//   const navigate = useNavigate()

//   const compliance = location.state as DataRow | undefined

//   if (!compliance) {
//     return <div>Compliance not found</div>
//   }

//   return (
//     <AdaptableCard className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Compliance Details</h2>

//       <div className="flex flex-col gap-6">
//         <div className="flex flex-row gap-6">
//           {/* First box - Categorization */}
//           <div className="border p-4 rounded-md w-1/4">
//             <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
//               Categorization
//             </h3>
//             <div className="flex items-center gap-2">
//               <Badge
//                 className={
//                   categorizationColor[compliance.Compliance_Categorization]?.dotClass
//                 }
//               />
//               <span
//                 className={`capitalize font-semibold ${
//                   categorizationColor[compliance.Compliance_Categorization]?.textClass
//                 }`}
//               >
//                 {categorizationColor[compliance.Compliance_Categorization]?.label}
//               </span>
//             </div>
//           </div>

//           {/* Second box - Bare Act Text */}
//           <div className="border p-4 rounded-md w-full">
//             <h3 className="text-sm font-medium mb-4">Bare Act Text</h3>
//             <p>{compliance.Bare_Act_Text}</p>
//           </div>
//         </div>

//         {/* Right side - Compliance Information */}
//         <div className="border p-4 rounded-md overflow-auto">
//           <h3 className="text-xl font-semibold mb-4">Compliance Information</h3>
//           <p className="text-sm mb-2"><strong>Compliance ID:</strong> {compliance.Compliance_Id}</p>
//           <p className="text-sm mb-2"><strong>Legislation:</strong> {compliance.Legislation}</p>
//           <p className="text-sm mb-2"><strong>Compliance Header:</strong> {compliance.Compliance_Header}</p>
//           <p className="text-sm mb-2"><strong>Compliance Description:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Description}</p>
//           <p className="text-sm mb-2"><strong>Penalty Description:</strong></p>
//           <p className="text-sm mb-2">{compliance.Penalty_Description}</p>
//           <p className="text-sm mb-2"><strong>Applicability:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Applicability}</p>
//           <p className="text-sm mb-2"><strong>Compliance Clause:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Clause}</p>
//           <p className="text-sm mb-2"><strong>Compliance Type:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Type}</p>
//           <p className="text-sm mb-2"><strong>Compliance Frequency:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Frequency}</p>
//           <p className="text-sm mb-2"><strong>Compliance Statutory Authority:</strong></p>
//           <p className="text-sm mb-2">{compliance.Compliance_Statutory_Authority}</p>
//           <p className="text-sm mb-2"><strong>Approval Required:</strong></p>
//           <p className="text-sm mb-2">{compliance.Approval_Required}</p>
//           <p className="text-sm mb-2"><strong>Criticality:</strong></p>
//           <p className="text-sm mb-2">{compliance.Criticality}</p>
//           <p className="text-sm mb-2"><strong>Penalty Type:</strong></p>
//           <p className="text-sm mb-2">{compliance.Penalty_Type}</p>
//           <p className="text-sm mb-2"><strong>Default Due Date:</strong></p>
//           <p className="text-sm mb-2">{compliance.Default_Due_Date}</p>
//           <p className="text-sm mb-2"><strong>First Due Date:</strong></p>
//           <p className="text-sm mb-2">{compliance.First_Due_Date}</p>
//           <p className="text-sm mb-2"><strong>Due Date:</strong></p>
//           <p className="text-sm mb-2">{compliance.Due_Date}</p>
//           <p className="text-sm mb-2"><strong>Scheduled Frequency:</strong></p>
//           <p className="text-sm mb-2">{compliance.Scheduled_Frequency}</p>
//           <p className="text-sm mb-2"><strong>Proof Of Compliance Mandatory:</strong></p>
//           <p className="text-sm">{compliance.Proof_Of_Compliance_Mandatory}</p>
//         </div>
//       </div>

//       <div className="mt-6">
//         <Button size="sm" variant="solid" onClick={() => navigate(-1)}>
//           Back to List
//         </Button>
//       </div>
//     </AdaptableCard>
//   )
// }

// export default ComplianceRowDetails

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdaptableCard from '@/components/shared/AdaptableCard'
import Badge from '@/components/ui/Badge'
import { Button } from '@/components/ui'

interface DataRow {
  Compliance_Id: number;
  Legislation: string;
  Compliance_Categorization: string;
  Compliance_Header: string;
  Compliance_Description: string;
  Penalty_Description: string;
  Compliance_Applicability: string;
  Bare_Act_Text: string;
  Compliance_Clause: string;
  Compliance_Type: string;
  Compliance_Frequency: string;
  Compliance_Statutory_Authority: string;
  Approval_Required: string;
  Criticality: string;
  Penalty_Type: string;
  Default_Due_Date: string;
  First_Due_Date: string;
  Due_Date: string;
  Scheduled_Frequency: string;
  Proof_Of_Compliance_Mandatory: string;
}

const categorizationColor: Record<string, { label: string; dotClass: string; textClass: string }> = {
  'LICENSE / REGISTRATION': {
    label: 'License / Registration',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-500',
  },
  // Add more categories as needed
}

const ComplianceRowDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const compliance = location.state as DataRow | undefined

  if (!compliance) {
    return <div>Compliance not found</div>
  }

  return (
    <AdaptableCard className="relative p-4">
      {/* Button Container */}
      <div className="absolute top-4 right-4">
        <Button size="sm" variant="solid" onClick={() => navigate(-1)}>
          Back to List
        </Button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Compliance Details</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          {/* First box - Categorization */}
          <div className="border p-4 rounded-md w-1/4">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
              Categorization
            </h3>
            <div className="flex items-center gap-2">
              <Badge
                className={
                  categorizationColor[compliance.Compliance_Categorization]?.dotClass
                }
              />
              <span
                className={`capitalize font-semibold ${
                  categorizationColor[compliance.Compliance_Categorization]?.textClass
                }`}
              >
                {categorizationColor[compliance.Compliance_Categorization]?.label}
              </span>
            </div>
          </div>

          {/* Second box - Bare Act Text */}
          <div className="border p-4 rounded-md w-full">
            <h3 className="text-sm font-medium mb-4">Bare Act Text</h3>
            <p>{compliance.Bare_Act_Text}</p>
          </div>
        </div>

        {/* Right side - Compliance Information */}
        <div className="border p-4 rounded-md overflow-auto">
          <h3 className="text-xl font-semibold mb-4">Compliance Information</h3>
          <p className="text-sm mb-2"><strong>Compliance ID:</strong> {compliance.Compliance_Id}</p>
          <p className="text-sm mb-2"><strong>Legislation:</strong> {compliance.Legislation}</p>
          <p className="text-sm mb-2"><strong>Compliance Header:</strong> {compliance.Compliance_Header}</p>
          <p className="text-sm mb-2"><strong>Compliance Description:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Description}</p>
          <p className="text-sm mb-2"><strong>Penalty Description:</strong></p>
          <p className="text-sm mb-2">{compliance.Penalty_Description}</p>
          <p className="text-sm mb-2"><strong>Applicability:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Applicability}</p>
          <p className="text-sm mb-2"><strong>Compliance Clause:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Clause}</p>
          <p className="text-sm mb-2"><strong>Compliance Type:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Type}</p>
          <p className="text-sm mb-2"><strong>Compliance Frequency:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Frequency}</p>
          <p className="text-sm mb-2"><strong>Compliance Statutory Authority:</strong></p>
          <p className="text-sm mb-2">{compliance.Compliance_Statutory_Authority}</p>
          <p className="text-sm mb-2"><strong>Approval Required:</strong></p>
          <p className="text-sm mb-2">{compliance.Approval_Required}</p>
          <p className="text-sm mb-2"><strong>Criticality:</strong></p>
          <p className="text-sm mb-2">{compliance.Criticality}</p>
          <p className="text-sm mb-2"><strong>Penalty Type:</strong></p>
          <p className="text-sm mb-2">{compliance.Penalty_Type}</p>
          <p className="text-sm mb-2"><strong>Default Due Date:</strong></p>
          <p className="text-sm mb-2">{compliance.Default_Due_Date}</p>
          <p className="text-sm mb-2"><strong>First Due Date:</strong></p>
          <p className="text-sm mb-2">{compliance.First_Due_Date}</p>
          <p className="text-sm mb-2"><strong>Due Date:</strong></p>
          <p className="text-sm mb-2">{compliance.Due_Date}</p>
          <p className="text-sm mb-2"><strong>Scheduled Frequency:</strong></p>
          <p className="text-sm mb-2">{compliance.Scheduled_Frequency}</p>
          <p className="text-sm mb-2"><strong>Proof Of Compliance Mandatory:</strong></p>
          <p className="text-sm">{compliance.Proof_Of_Compliance_Mandatory}</p>
        </div>
      </div>
    </AdaptableCard>
  )
}

export default ComplianceRowDetails
