import { Cards } from "../Cards/Cards";
import set from "../../assets/seta.png";
import $ from "jquery";
import { useEffect } from "react";

export const Carrossel = ({ serie, index }: any) => {
  useEffect(() => {
    $(`#buttonRoll${serie.id}`).on("click", function () {
      var index: any = $(this).index();
      var list: any = $(`#listColection${serie.id}`).scrollLeft();
      console.log(serie.id);
      $(`#listColection${serie.id}`).animate(
        { scrollLeft: list + (Number(index === 0 && "-") + 150) },
        10
      );
    });
  }, []);
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
      <h2>{serie.name}</h2>
      <ul id={`listColection${serie.id}`}>
        <span />
        <Cards serie={serie} />
        <button id={`buttonRoll${serie.id}`} className="button-scroll-back">
          <img src={set} />
        </button>
      </ul>
    </div>
  );
};
