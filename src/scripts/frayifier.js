var events = require('./utils/events.js');

function getOptions(select1) {
    var selected1 = [];
    for (var i = 0; i < select1.length; i++) {
        if (select1.options[i].selected) selected1.push(select1.options[i].value);
    }
    var last = selected1.pop();
    return selected1.join(', ') + ' and ' + last;
}


function setHiddenOptionFields(ev, e){
    ev.preventDefault();
    var formType = document.location.hash.replace('#type__','');
    var form = document.forms[formType + '-form'];
    form.subtitle.value = formType + ' from ' + getOptions(form.countries);
    form.callback_url.value = document.location.origin;
    form.source.value = formType;
    form.submit();
}

function Frayifier(){
    this.version = require('./utils/version.js');

    this.attachEvents();
}

Frayifier.prototype.attachEvents = function(){
    var chartTypeButtons = document.querySelectorAll('.chart-type .o-buttons');
    var exportButtons = document.querySelectorAll('#export .o-buttons');
    //events.on(chartTypeButtons, 'click', setHiddenChartTypeFields);
    events.on(exportButtons, 'click', setHiddenOptionFields);
};

new Frayifier();

//example export
module.exports = Frayifier;