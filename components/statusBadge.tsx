const StatusBadge = ({ status, color }: { status: string; color: string }) => {
  return (
    <p
      className={`py-[1px] px-1 ${color} rounded-sm text-white min-w-12 text-center`}
    >
      {status}
    </p>
  );
};

export default StatusBadge;
