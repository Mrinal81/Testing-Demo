import React, { useMemo, useState } from 'react';
import { ColumnDef, OnSortParam } from '@/components/shared/DataTable';
import DataTable from '@/components/shared/DataTable';
import { Button, Calendar, Dialog, Tooltip } from '@/components/ui';

interface ChecklistDataRow {
  Compliance_Instance_ID: number;
  Compliance_ID: number;
  Compliance_Header: string;
  Due_Date: Date;
  Owner_Name: string;
  Approver_Name: string;
}

const initialData: ChecklistDataRow[] = [
  {
    Compliance_Instance_ID: 1001,
    Compliance_ID: 3236,
    Compliance_Header: 'Renewal of Registration',
    Due_Date: new Date('2024-09-15'),
    Owner_Name: 'John Doe',
    Approver_Name: 'Jane Smith'
  },
  {
    Compliance_Instance_ID: 1002,
    Compliance_ID: 4501,
    Compliance_Header: 'Annual Renewal of License',
    Due_Date: new Date('2024-10-01'),
    Owner_Name: 'Alice Johnson',
    Approver_Name: 'Robert Brown'
  },
  {
    Compliance_Instance_ID: 1003,
    Compliance_ID: 5602,
    Compliance_Header: 'Monthly Compliance Report',
    Due_Date: new Date('2024-09-05'),
    Owner_Name: 'Michael Lee',
    Approver_Name: 'Emily Davis'
  },
  {
    Compliance_Instance_ID: 1004,
    Compliance_ID: 6789,
    Compliance_Header: 'Quarterly Wage Report',
    Due_Date: new Date('2024-10-15'),
    Owner_Name: 'Sarah Wilson',
    Approver_Name: 'David Clark'
  },
  {
    Compliance_Instance_ID: 1005,
    Compliance_ID: 7890,
    Compliance_Header: 'Renewal of Trade License',
    Due_Date: new Date('2024-11-01'),
    Owner_Name: 'Linda Martinez',
    Approver_Name: 'James Lewis'
  }
];

const AssignChecklistTable: React.FC = () => {
  const [data, setData] = useState<ChecklistDataRow[]>(initialData);
  const [activeRowId, setActiveRowId] = useState<number | null>(null);
  const [calendarValue, setCalendarValue] = useState<Date | undefined>(undefined);
  const [dialogType, setDialogType] = useState<'dueDate' | 'ownerName' | 'approverName' | null>(null);

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate && activeRowId) {
      setData((prevData) =>
        prevData.map((item) =>
          item.Compliance_Instance_ID === activeRowId
            ? { ...item, Due_Date: newDate }
            : item
        )
      );
      setDialogType(null);
    }
  };

  const handleOwnerChange = (newOwner: string) => {
    if (activeRowId) {
      setData((prevData) =>
        prevData.map((item) =>
          item.Compliance_Instance_ID === activeRowId
            ? { ...item, Owner_Name: newOwner }
            : item
        )
      );
      setDialogType(null);
    }
  };

  const handleApproverChange = (newApprover: string) => {
    if (activeRowId) {
      setData((prevData) =>
        prevData.map((item) =>
          item.Compliance_Instance_ID === activeRowId
            ? { ...item, Approver_Name: newApprover }
            : item
        )
      );
      setDialogType(null);
    }
  };

  const columns: ColumnDef<ChecklistDataRow>[] = useMemo(
    () => [
      {
        header: 'Compliance Instance ID',
        accessorKey: 'Compliance_Instance_ID',
        cell: (props) => (
          <div className="w-32 text-start">{props.getValue()}</div>
        ),
      },
      {
        header: 'Compliance ID',
        accessorKey: 'Compliance_ID',
        cell: (props) => (
          <div className="w-32 text-start">{props.getValue()}</div>
        ),
      },
      {
        header: 'Compliance Header',
        accessorKey: 'Compliance_Header',
        cell: (props) => {
          const value = props.getValue() as string;
          return (
            <Tooltip title={value} placement="top">
              <div className="w-36 truncate">{value}</div>
            </Tooltip>
          );
        },
      },
      {
        header: 'Due Date',
        accessorKey: 'Due_Date',
        cell: ({ row, cell }) => {
          const currentDueDate = cell.getValue<Date>();
          return (
            <div className="w-32">
              <Button
                onClick={() => {
                  setCalendarValue(currentDueDate);
                  setActiveRowId(row.original.Compliance_Instance_ID);
                  setDialogType('dueDate');
                }}
                size="sm"
                variant="solid"
                className="w-36 px-2 py-1 border rounded-md bg-indigo-500 hover:bg-indigo-500"
              >
                {currentDueDate ? currentDueDate.toLocaleDateString() : 'Select Date'}
              </Button>
            </div>
          );
        },
      },
      {
        header: "Owner's Name",
        accessorKey: 'Owner_Name',
        cell: ({ row, cell }) => {
          const currentOwner = cell.getValue<string>();
          return (
            <div className="w-42">
              <Button
                onClick={() => {
                  setActiveRowId(row.original.Compliance_Instance_ID);
                  setDialogType('ownerName');
                }}
                size="sm"
                variant="solid"
                className="w-36 px-2 py-1 border rounded-md bg-indigo-500 hover:bg-indigo-300"
              >
                {currentOwner}
              </Button>
            </div>
          );
        },
      },
      {
        header: "Approver's Name",
        accessorKey: 'Approver_Name',
        cell: ({ row, cell }) => {
          const currentApprover = cell.getValue<string>();
          return (
            <div className="w-46">
              <Button
                onClick={() => {
                  setActiveRowId(row.original.Compliance_Instance_ID);
                  setDialogType('approverName');
                }}
                size="sm"
                variant="solid"
                className="w-36 px-2 py-1 border rounded-md bg-indigo-500 hover:bg-indigo-300"
              >
                {currentApprover}
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const [tableData, setTableData] = useState({
    total: initialData.length,
    pageIndex: 1,
    pageSize: 10,
    query: '',
    sort: { order: '', key: '' },
  });

  const onPaginationChange = (page: number) => {
    setTableData(prev => ({ ...prev, pageIndex: page }));
  };

  const onSelectChange = (value: number) => {
    setTableData(prev => ({ ...prev, pageSize: Number(value), pageIndex: 1 }));
  };

  const onSort = (sort: OnSortParam) => {
    setTableData(prev => ({ ...prev, sort }));
  };

  return (
    <div className="relative">
      <DataTable
        columns={columns}
        data={data}
        skeletonAvatarColumns={[0]}
        skeletonAvatarProps={{ className: 'rounded-md' }}
        loading={false}
        pagingData={{
          total: tableData.total,
          pageIndex: tableData.pageIndex,
          pageSize: tableData.pageSize,
        }}
        onPaginationChange={onPaginationChange}
        onSelectChange={onSelectChange}
        onSort={onSort}
      />

      <Dialog
        isOpen={dialogType === 'dueDate'}
        onClose={() => setDialogType(null)}
        onRequestClose={() => setDialogType(null)}
        className="w-full max-w-md p-6"
      >
        <h5 className="mb-4 text-lg font-semibold">Select Due Date</h5>
        <div className="max-h-96 overflow-y-auto">
          <Calendar
            value={calendarValue}
            onChange={(date) => {
              handleDateChange(date);
              setCalendarValue(date);
            }}
          />
        </div>
      </Dialog>

      <Dialog
        isOpen={dialogType === 'ownerName'}
        onClose={() => setDialogType(null)}
        onRequestClose={() => setDialogType(null)}
        className="w-full max-w-md p-6"
      >
        <h5 className="mb-4 text-lg font-semibold">Select Owner's Name</h5>
        <div className="max-h-96 overflow-y-auto">
          <ul className="list-none p-0 m-0">
            {['Admin', 'User', 'HR', 'Finance User'].map((option) => (
              <li
                key={option}
                onClick={() => handleOwnerChange(option)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <Button
                  className="w-full text-left"
                  variant="solid"
                >
                  {option}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>

      <Dialog
        isOpen={dialogType === 'approverName'}
        onClose={() => setDialogType(null)}
        onRequestClose={() => setDialogType(null)}
        className="w-full max-w-md"
      >
        <h5 className="mb-4 text-lg font-semibold">Select Approver's Name</h5>
        <div className="max-h-96 overflow-y-auto">
          <ul className="list-none p-0 m-0">
            {['Shivesh Varma', 'Amit Sharma', 'Priya Singh', 'Ravi Kumar'].map((name) => (
              <li
                key={name}
                onClick={() => handleApproverChange(name)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <Button
                  className="w-full text-left"
                  variant="solid"
                >
                  {name}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </div>
  );
};

export default AssignChecklistTable;