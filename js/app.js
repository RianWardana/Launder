!function(a){var e=a.querySelector("#app");e.displayInstalledToast=function(){a.querySelector("#caching-complete").show()},e.addEventListener("dom-change",function(){console.log("bindings have resolved and content has been stamped to the page")}),window.addEventListener("WebComponentsReady",function(){}),e.onMenuSelect=function(){var e=a.querySelector("#paperDrawerPanel");e.narrow&&e.closeDrawer()},e.halaman_sekarang="Katalog",e.hello=function(){e.halaman_sekarang="Tambah"},db=window.openDatabase("launder","1.0","Launder",2e5),e.katalog=[],db.transaction(function(a){a.executeSql("select rowid, nama, jenis, warna, keterangan, dicuci from katalog order by nama",[],function(a,n){for(var r=n.rows.length,o=0;r>o;o++)e.push("katalog",{rowid:o+1,nama:n.rows.item(o).nama,jenis:n.rows.item(o).jenis,warna:n.rows.item(o).warna,keterangan:n.rows.item(o).keterangan,dicuci:n.rows.item(o).dicuci})})}),e.jenis=[],db.transaction(function(a){a.executeSql("select rowid, nama, jenis, jumlah from jenis order by nama asc",[],function(a,n){for(var r=n.rows.length,o=0;r>o;o++)e.push("jenis",{rowid:n.rows.item(o).rowid,nama:n.rows.item(o).nama,jenis:n.rows.item(o).jenis,jumlah:n.rows.item(o).jumlah})})}),e.warna=[],db.transaction(function(a){a.executeSql("select rowid, warna, hex from warna order by warna asc",[],function(a,n){for(var r=n.rows.length,o=0;r>o;o++)e.push("warna",{rowid:n.rows.item(o).rowid,warna:n.rows.item(o).warna,hex:n.rows.item(o).hex})})})}(document);