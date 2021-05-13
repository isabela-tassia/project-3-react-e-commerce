import React from react;

const LikedPerson =({person}) => (
    <div className="liked-person">
        <div className="liked-person-image">
            <img src={`images/users/${person.image}`} 
            src={`You liked /${person.name}`}
            />
        </div>

    </div>
);
export default LikedPerson;