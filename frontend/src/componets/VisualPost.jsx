export function VisualPost(tasks, taskKey) {
  console.log("dados", tasks.task);
  console.log("sua key", taskKey);

  return (
    <div
      className="descricao-post"
      key={taskKey}
      onClick={() => {
        VisualPost(tasks[taskKey], taskKey);
      }}
    >
      <span className="titulo-post">{`${taskKey}`}</span>
      {Object.entries(tasks.task).map(([key, value]) => (
        <div className="card-taks" key={taskKey + key}>
          <p className="status-post">{key}</p>
          <span className="titulo-taks">{`${value}`}</span>
        </div>
      ))}
      <p className="status-post">Taks</p>
    </div>
  );
}
