import { DataTable } from "@/components/ui/table/dataTable";
import { customersList } from "@/lib/data-dummy/customerData";
import { customerColumn } from "@/components/ui/table/customerColumns";

const CustomersPage = () => {
  return (
    <div className="w-full p-5 md:p-8 bg-white rounded-sm ">
      <DataTable
        columns={customerColumn}
        data={customersList}
        columnFilterName="email"
        placeholderFilter="Filter emails..."
      />
    </div>
  );
};

export default CustomersPage;
