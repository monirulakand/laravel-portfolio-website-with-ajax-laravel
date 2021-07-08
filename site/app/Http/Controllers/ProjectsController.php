<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProjectModel;

class ProjectsController extends Controller
{
    function ProjectsPage(){
        $ProjectData=json_decode(ProjectModel::orderBy('id','desc')->get());
        return view('Projects',['ProjectData'=>$ProjectData]);
    }
}
