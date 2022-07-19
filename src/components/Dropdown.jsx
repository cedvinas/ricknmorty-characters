import React from "react";

export default function Dropdown() {


    function hideColumnHandler(e) {
        if (e.target.value === '1') {
            console.log(e.target.value);
        }
    }


    return (
        <div class="dropdown">
            <button class="dropbtn">Display columns</button>
            <div class="dropdown-content">
                <ul>
                    <li>
                        <span>ID</span>
                        <input type="checkbox" name="id" id="id" value='1' onChange={(e) => hideColumnHandler(e)} />
                    </li>
                    <li>
                        <span>Name</span>
                        <input type="checkbox" name="name" id="name" />
                    </li>
                    <li>
                        <span>Status</span>
                        <input type="checkbox" name="status" id="status" />
                    </li>
                    <li>
                        <span>Specie</span>
                        <input type="checkbox" name="specie" id="specie" />
                    </li>
                    <li>
                        <span>Type</span>
                        <input type="checkbox" name="type" id="type" />
                    </li>
                    <li>
                        <span>Gender</span>
                        <input type="checkbox" name="gender" id="gender" />
                    </li>
                    <li>
                        <span>Origin</span>
                        <input type="checkbox" name="origin" id="origin" />
                    </li>
                    <li>
                        <span>Location</span>
                        <input type="checkbox" name="location" id="location" />
                    </li>
                    <li>
                        <span>Image</span>
                        <input type="checkbox" name="image" id="image" />
                    </li>

                </ul>
            </div>
        </div>
    )
}