var findup = require('./')
var domify = require('domify')
var test   = require('tape')

test('findup-attribute', function(t) {
  var dom = domify([
      '<ul attr-a>'
      , '<li attr-b>'
      ,   '<a attr-c></a>'
      , '</li>'
      , '<li attr-d>'
      ,   '<a attr-e></a>'
      , '</li>'
    , '</ul>'
  ].join('\n'))

  var attrs = {}
  'abcde'.split('').forEach(function(key) {
    attrs[key] = document.querySelector('[attr-'+key+']')
  })

  t.ok(findup(attrs.c, 'attr-b') === attrs.b)
  t.ok(findup(attrs.b, 'attr-b') === attrs.b)
  t.notOk(findup(attrs.a, 'attr-b'))

  t.ok(findup(attrs.e, 'attr-d') === attrs.d)
  t.ok(findup(attrs.d, 'attr-d') === attrs.d)
  t.notOk(findup(attrs.b, 'attr-d'))

  t.ok(findup(attrs.b, 'attr-a') === attrs.a)
  t.ok(findup(attrs.c, 'attr-a') === attrs.a)
  t.ok(findup(attrs.d, 'attr-a') === attrs.a)
  t.ok(findup(attrs.e, 'attr-a') === attrs.a)

  t.end()
})

test('shutdown', function(t) {
  t.end(); setTimeout(function() { window.close() })
})
