const OrderIdPage = ({ params }: { params: { orderId: string } }) => {
  return <div>{params.orderId}</div>;
};

export default OrderIdPage;
