import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdaptableCard from '@/components/shared/AdaptableCard'
import Badge from '@/components/ui/Badge'
import { Button } from '@/components/ui'

interface DataRow {
  Compliance_Id: number;
  IHRC_Company_Name: string;
  Location: string;
  Legislation: string;
  Compliance_Categorization: string;
  Compliance_Header: string;
  Compliance_Description: string;
  Penalty_Description: string;
  Compliance_Applicability: string;
  Bare_Act_Text: string;
  Compliance_Clause: string;
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
    <AdaptableCard className="p-4">
      <h2 className="text-xl font-semibold mb-4">Compliance Details</h2>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          {/* First box - Categorization */}
          <div className="border p-4 rounded-md w-1/4">
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
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
            <h3 className="text-lg font-medium mb-4">Bare Act Text</h3>
            <p>{compliance.Bare_Act_Text}</p>
          </div>
        </div>

        {/* Right side - Compliance Information */}
        <div className="border p-4 rounded-md overflow-auto">
          <h3 className="text-lg font-medium mb-4">Compliance Information</h3>
          <p><strong>Compliance ID:</strong> {compliance.Compliance_Id}</p>
          <p><strong>Location:</strong> {compliance.Location}</p>
          <p><strong>Legislation:</strong> {compliance.Legislation}</p>
          <p className="mt-4"><strong>Compliance Description:</strong></p>
          <p>{compliance.Compliance_Description}</p>
          <p className="mt-4"><strong>Penalty Description:</strong></p>
          <p>{compliance.Penalty_Description}</p>
          <p className="mt-4"><strong>Applicability:</strong></p>
          <p>{compliance.Compliance_Applicability}</p>
          <p className="mt-4"><strong>Compliance Clause:</strong></p>
          <p>{compliance.Compliance_Clause}</p>
        </div>
      </div>

      <div className="mt-6">
        <Button size="sm" variant="solid" onClick={() => navigate(-1)}>
          Back to List
        </Button>
      </div>
    </AdaptableCard>
  )
}

export default ComplianceRowDetails
