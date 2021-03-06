﻿//隐藏大与2的项
$('#Type option:gt(2)').hide();

//类型下拉框事件
function change() {
    var type = $("#Type").val();
    if (type == 0) {
        $("#Department").show();
        $("#job").addClass("hidden");
    }
    else {
        $("#Department").hide();
        $("#job").removeClass("hidden");
    }
}

//设置
function set() {
    var nId = $("#nId").val();
    var d = $("#Department :selected").val();//业务id
    var j = $("#job :selected").val();//业务id
    var type = $("#Type").val();

    //alert("班级ID"+nId + "部门id" + d + "岗位id" + j + "类型" + type);
    $.getJSON("Set", { nId: nId, type: type, bId: type == 0 ? d : j }, function (result) {
        $.modalMsg(result.msg, result.type);
        $('#dataListDiv').load('GetDataList?nId=' + nId);
    });
}

//移除
function remove(Id) {
    $.modalConfirm('确认移除吗？', function (r) {
        if (r) {
            $.getJSON("Remove", { id: Id }, function (result) {
                $.modalMsg(result.msg, result.type);
                var strurl = 'GetDataList?nId=' + $("#nId").val();
                GetDataList(strurl);
            });
        }
    });
}
$("#Department").bindSelect({
    url: "GetDTreeSelectJson"
});