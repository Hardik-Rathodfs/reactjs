import '../App.css';
function Main()
{
    return(

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2023/12/16/00/06/mountain-8451604_1280.jpg" height={680} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138_1280.jpg" class="d-block w-100" alt="..." height={680} width={800}/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2023/01/08/05/52/sunset-7704594_1280.jpg" class="d-block w-100" alt="..." height={680}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Main;