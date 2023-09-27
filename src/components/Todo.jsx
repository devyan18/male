export const Todo = ({ text, done, onClick }) => {
  return (
    <div className={`alert alert-${done ? "success" : "warning"} d-flex justify-content-between`}>
        <span>{text}</span>
        <button
            onClick={onClick}
            className={`btn btn-sm btn-outline-${done ? "success" : "warning"}`}>
            { done ? "Completado" : "Completar"}
        </button>
    </div>
  )
}
