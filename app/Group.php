<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected  $table = 'groups';
    //

    public function user(){
        return $this->hasMany('User', 'group_id', 'id');
    }
}
