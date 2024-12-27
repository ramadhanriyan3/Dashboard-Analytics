import { productColumns } from "@/components/ui/table/productColumns";
import { DataTable } from "@/components/ui/table/dataTable";

import { productList } from "@/lib/dataDummy";

const ProductPage = () => {
  return (
    <div className="w-full p-5 md:p-8 bg-white rounded-sm ">
      <DataTable columns={productColumns} data={productList} />
    </div>
  );
};

export default ProductPage;
