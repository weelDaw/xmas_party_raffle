
<!--============== UPLOAD MAN NO. AND NAMES =============-->

<div id='upload_name_man_no' class='modal hide fade' tabindex="-1" role='dialog' area-hidden="true">
    <div class='modal-body'>
        <form enctype="MULTIPART/FORM-DATA" method="POST" action= '../process/upload_entries.php'>
            <input type='file' id='upload_file' name='upload_file'/>
            <input type='submit' class='btn' id='btn_upload_list' value='UPLOAD' data-loading-text='loading....'/>
        </form>
    </div>
    <div class='modal-footer'>
        <button class="btn btn-primary" data-dismiss='modal'>Close</button>
    </div>
</div>

<!--============== REGISTER MAN NO. =============-->

<div id='reg_man_no' class='modal hide fade' tabindex="-1" role='dialog' area-hidden="true">
    <div class='modal-body'>
        <div id="entries"></div>
    </div>
    <div class='modal-footer'>
        <button class="btn btn-warning" id="register_man_no">Register</button>
        <button class="btn btn-primary" data-dismiss='modal'>Close</button>
    </div>
</div>

<!--============== ATTENDEES =============-->

<div id='attendees' class='modal hide fade' tabindex="-1" role='dialog' area-hidden="true">
    <div class='modal-body'>
        <table class="table table-bordered">
            <tr>
                <th></th>
                <th>ATTENDEES</th>
            </tr>
            <tbody id="show_attendees"></tbody>
        </table>
    </div>
    <div class='modal-footer'>
        <button class="btn btn-primary" data-dismiss='modal'>Close</button>
    </div>
</div>

<!--============== NON - ATTENDEES =============-->

<div id='non_attendees' class='modal hide fade' tabindex="-1" role='dialog' area-hidden="true">
    <div class='modal-body'>
        <table class="table table-bordered">
            <tr>
                <th></th>
                <th>NON - ATTENDEES</th>
            </tr>
            <tbody id="show_non_attendees"></tbody>
        </table>
    </div>
    <div class='modal-footer'>
        <button class="btn btn-primary" data-dismiss='modal'>Close</button>
    </div>
</div>

<!--============== ALL ENTRIES =============-->

<div id='all_entries' class='modal hide fade' tabindex="-1" role='dialog' area-hidden="true">
    <div class='modal-body'>
        <table class="table table-bordered">
            <tr>
                <th></th>
                <th>ENTRIES</th>
            </tr>
            <tbody id="show_entries2"></tbody>
        </table>
    </div>
    <div class='modal-footer'>
        <button class="btn btn-primary" data-dismiss='modal'>Close</button>
    </div>
</div>