<?php
// 1 获取json
$regJson = file_get_contents("reg.json");

// 2 拼接字符串
$data = json_decode($regJson);
// 获取网页注册信息
$webData = $_GET['user'];
$tarData = $data.",".$webData;

// 3 保存到json
$regStr = json_encode($tarData);
file_put_contents("reg.json",$regStr);
echo $regStr;
?>