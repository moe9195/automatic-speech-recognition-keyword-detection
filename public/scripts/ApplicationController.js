angular.module('app', []);

function ApplicationController ($scope, $window, $http, $log, $sce) {
  $scope.getDeviceId = () => {
    return Math.random().toString(36).slice(2);
  };

  $scope.call = { sid: null, to: '', status: '' };
  $scope.sync = { client: null, state: 'unknown', sid: null, text: '', call: { sid: null, to: null, status: null } };

  $scope.labels = ["أم أذينة الشرقي","أم أذينة الغربي","أم السماق","أم قصير","ابو علندا","ابو نصير","اﻷخضر","البنيات","البنيات الجنوبي","البنيات الشمالي","البيادر","التلاع الشرقي","الجبيهة","الجرن","الجندويل ","الجويدة","الجيزة","الحرية","الحسنية","الحمرانية","الخالدين","الخزنة","الديار","الذراع","الرشيد","الرضوان","الروابي","الرواق","الرونق","الزهراء","السلام ","السهل","الصالحين","الصحابة","الصناعة","الصويفية","العبدلي","القسطل","القويسمة","الكرامة","الكرسي","الكمالية","المدينة","المدينة الطبية","المقابلين","الموقر","النزهة","النصر","الهاشمي","الهاشمي الجنوبي","الهاشمي الشمالي","الهلال","اليادودة","الياسمين","اليرموك","ام البساتين","ام السماق","ام العمد","بدر","بدر الجديدة","بركة","بسمان","تلاع العلي","جاوا","جبل القصور","جبل عمان","حسبان","حمزة","حي ابن عوف","حي البلدية","حي الجامعة","حي الزيتونة","حي الشهيد","حي الصديق","حي المطار","خريبة السوق","خلدا","دابوق","راس العين","رغدان","زهران","سحاب","شفابدران","صويلح","ضاحية الرشيد","طارق","طبربور","عبدون الجنوبي","عبدون الشمالي","قطنة","ماركا","ماركا الجنوبية","مرج الحمام","ناعور","وادي السير"];

  $scope.identity = $scope.getDeviceId();
  $scope.phone = '';
  $scope.language = 'ar-JO';

   $scope.call = function (index) {
    const payload = {
      identity: $scope.identity,
      language: $scope.language,
      phone: $scope.phone,
      labels: $scope.labels,
    };

    $http.post('/api/call', JSON.stringify(payload))
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
  };
}

angular
  .module('app')
  .controller('ApplicationController', ApplicationController);
