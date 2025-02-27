import { createSignal, For, Show } from "solid-js"

let data = [
  {
    title: "Poster #1",
    images: ["./assets/poster_1.jpg"]
  },

  {
    title: "Booklet",
    images: [
      "./assets/booklet_1.png",
      "./assets/booklet_2.png",
      "./assets/booklet_3.png",
      "./assets/booklet_4.png",
      "./assets/booklet_5.png",
      "./assets/booklet_6.png",
      "./assets/booklet_7.png",
      "./assets/booklet_8.png",
      "./assets/booklet_9.png",
      "./assets/booklet_10.png",
      "./assets/booklet_11.png"
    ]
  }
]

function TitleBar() {
  return (
    <div class="title-bar">
      <div class="title-text"> 360 Bike Safety </div>
    </div>
  )

}

function Contents() {
  return (
    <div class="content-grid">

      <div class="left">
        <About></About>
        <Links></Links>
      </div>

      <div class="right">
        <Images></Images>
      </div>

    </div>
  )
}

function About() {
  return (<div>
    About
  </div>)
}

function Images() {
  return (<div class="images">
    <div class="text">Images</div>
    <For each={data}>
      {(e) => <Project title={e.title} images={e.images}></Project>}
    </For>
  </div>)
}

function Project(props) {
  // on hover, show image
  const [showing, setShowing] = createSignal(false)
  const mouseover = () => setShowing(true)
  const mouseout = () => setShowing(false)

  return (
    <div>
      <h4 class="project-title"
        onmouseover={mouseover}
        onmouseout={mouseout}
      > {props.title} </h4>
      <Show when={showing()}>
        <img src={props.images[0]} class="hover-image"></img>
      </Show>
    </div>
  )


}


function Links() {
  return (<div>Links</div>)
}

// Title bar
// -------------------------
// About | Images
// About |
// About |
// ------
// links |
// links |


function App() {
  return (
    <div class="container">
      <TitleBar></TitleBar>
      <Contents></Contents>
    </div>
  );
}

export default App;
