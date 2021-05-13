import React from "react";
import Rewind from "./actions/Rewind";
import Dislike from "./actions/Dislike";
import Like from "./actions/Like";
import SuperLike from "./actions/SuperLike";

const actions = ({ person, modifySuperficialChoices }) => {
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.Id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <SuperLike
      userId={person.Id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>;
};

export default Actions;
