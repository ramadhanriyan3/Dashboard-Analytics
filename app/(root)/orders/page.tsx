import { DataTable } from "@/components/ui/table/dataTable";
import { orderColumn } from "@/components/ui/table/orderColumns";
import { orderList } from "@/lib/data-dummy/ordersData";

const OrdersPage = () => {
  return (
    <div className="w-full p-5 md:p-8 bg-white rounded-sm ">
      <DataTable
        columns={orderColumn}
        data={orderList}
        columnFilterName="orderId"
        placeholderFilter="Find an Id..."
      />
    </div>
  );
};

export default OrdersPage;
