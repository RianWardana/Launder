(function(document) {
  //'use strict'; 

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  
  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('bindings have resolved and content has been stamped to the page');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };


/************************************************ LAUNDER SCRIPT **********************************************/

    app.halaman_sekarang = "Katalog";
    app.hello = function() { app.halaman_sekarang = "Tambah"; }
    db = window.openDatabase('launder', '1.0', 'Launder', 200000)

    // ISI KATALOG DARI DATABASE LOKAL //
    app.katalog = [];
    db.transaction(function(t) {
      t.executeSql("select rowid, nama, jenis, warna, keterangan, dicuci, timeselesai from katalog", [], function(t, result) {
          var len = result.rows.length;
          for(var i = 0; i < len; i++) {
              app.push('katalog', { 
                  rowid: result.rows.item(i).rowid,
                  nama: result.rows.item(i).nama,
                  jenis: result.rows.item(i).jenis,
                  warna: result.rows.item(i).warna, 
                  keterangan: result.rows.item(i).keterangan,
                  dicuci: result.rows.item(i).dicuci,
                  timeselesai: result.rows.item(i).timeselesai
              });
          }
      });
    });

    // ISI JENIS DARI DATABASE LOKAL //
    app.jenis = [];
    db.transaction(function(t) {
      t.executeSql("select rowid, nama, jenis, jumlah from jenis order by nama asc", [], function(t, result) {
          var len = result.rows.length;
          for(var i = 0; i < len; i++) {
              app.push('jenis', { 
                  rowid: result.rows.item(i).rowid,
                  nama: result.rows.item(i).nama,
                  jenis: result.rows.item(i).jenis,
                  jumlah: result.rows.item(i).jumlah 
              });
          }
      });
    });

    // ISI WARNA DARI DATABASE LOKAL //
    app.warna = [];
    db.transaction(function(t) {
        t.executeSql("select rowid, warna, hex from warna order by warna asc", [], function(t, result) {
            var len = result.rows.length;
            for(var i = 0; i < len; i++) {
                app.push('warna', { 
                    rowid: result.rows.item(i).rowid,
                    warna: result.rows.item(i).warna,
                    hex: result.rows.item(i).hex
                });
            }
        });
    });

  /************************************************ LAUNDER SCRIPT **********************************************/


})(document);
