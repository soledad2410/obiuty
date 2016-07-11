<?php
/**
 * Created by PhpStorm.
 * User: HungLS
 * Date: 7/7/2016
 * Time: 4:05 PM
 */

namespace App\Http\Controllers;


class DashboardController extends BaseController
{

    public function index()
    {
        return view($this->view);
    }

}