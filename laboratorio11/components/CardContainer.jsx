export default function CardContainer({ children }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-indigo-300 transition-shadow duration-300 border border-indigo-100">
      {children}
    </div>
  );
}