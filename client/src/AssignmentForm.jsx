import React from 'react';

export default function AssignmentForm(props) {
    return (
        <form action="" method="post">
        <input type="text" value="Title" name="title" id=""/>
            <br/>
            <br/>
        <input type="date" name="date" id=""/>
            <br/>
            <br/>
        <input type="text" value="GitHu Link" name="github-link" id=""/>
            <br/>
            <br/>
        <input type="text" value="Type" name="type" id=""/>
            <br/>
            <br/>
        <input type="text" value="Unit" name="unit" id=""/>
            <br/>
            <br/>
        <input type="button" value="Add a new assignment"/>
    </form>
    )
}