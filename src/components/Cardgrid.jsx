export default ({item}) => {
  return (
    <div class="card">
      <a href={"/eventos?id=" + item.id}>
        <img class="card-img-top" src={item.imageSrc} alt="Card image cap"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.body}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
  </div>
  );
}