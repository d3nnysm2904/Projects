import React from 'react';
import './Form.css';



const History = ( { formData, toggle } ) =>
{

    let history;
    let choice;
    if ( toggle )
    {

        history = [
            [ `In a far away country the ${ formData.adj } ${ formData.noun } was getting ready to figth the ${ formData.adj2 } ${ formData.noun2 }. The battle to come, soon  became one of the most notorious figths in the history books` ],

            [ `There was a  ${ formData.adj2 } ${ formData.noun2 } who loved a ${ formData.adj } ${ formData.noun }.This love was imposible because the families of this lovers where enemies since the beginning of times. Will love prevail ? ` ],

            [ `Once upon a time in a far away jungle , a ${ formData.adj }  ${ formData.noun } was born , some say this creature will defeat the king of the jungle  ${ formData.adj2 }  ${ formData.noun2 } ` ],

            [ `In the early 1800 ${ formData.adj } ${ formData.noun } created one of the greatest empires in the world. In the other side of the world  the great King of sea  the ${ formData.adj2 } ${ formData.noun2 } was getting ready to conquer ${ formData.noun } part of the world. Who will be victoriouss , land or sea ?  ` ],


            // More histories can be created 


        ];
        const idx = Math.floor( Math.random() * history.length );
        choice = history[ idx ];
    }
    else { <div>Create History</div>; }





    return (
        <div
        >
            { choice }

        </div> );



};

export default History;