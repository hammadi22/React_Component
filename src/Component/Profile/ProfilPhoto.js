import React from 'react';
import image from './profile.jpg';
function profilPhoto(){
    return(
<div className ='profilPhoto'>
    <img src={image} width="320" height="240" class="img-circular"   />
          <br/>
</div>
    )
}

export default profilPhoto;