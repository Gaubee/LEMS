###
 *
 *  jQuery Tooltips by Gary Hepting - https://github.com/ghepting/jquery-tooltips
 *  
 *  Open source under the BSD License. 
 *
 *  Copyright © 2013 Gary Hepting. All rights reserved.
 *
###

(($) ->
  $.fn.tooltip = (options) ->
    defaults =
      topOffset: 0
      delay: 100                    # delay before showing (ms)
      speed: 100                    # animation speed (ms)

    options = $.extend(defaults, options)

    tooltip = $('#tooltip')         # tooltip element
    delayShow = ''                  # delayed open
    trigger = ''                    # store trigger

    if $('#tooltip').length != 1
      # add tooltip element to DOM
      tooltip = $("<div id=\"tooltip\"></div>")
      tooltip.appendTo("body").hide()
    
    getElementPosition = (el) ->
      offset = el.offset()
      win = $(window)
      top: top = offset.top - win.scrollTop()
      left: left = offset.left - win.scrollLeft()
      bottom: bottom = win.height() - top - el.outerHeight()
      right: right = win.width() - left - el.outerWidth()

    setPosition = (trigger) ->
      coords = getElementPosition(trigger)
      if tooltip.outerWidth() > ($(window).width() - 20)
        tooltip.css('width',$(window).width() - 20)
      attrs = {}
      tooltip.css('max-width', 
        Math.min(
          ($(window).width()-parseInt($('body').css('padding-left'))-parseInt($('body').css('padding-right'))),
          parseInt(tooltip.css('max-width'))
        )
      )
      width = tooltip.outerWidth()
      height = tooltip.outerHeight()
      if coords.left <= coords.right
        tooltip.addClass('left')
        attrs.left = coords.left
      else
        tooltip.addClass('right')
        attrs.right = coords.right
      if (coords.top-options.topOffset) > (height+20)
        tooltip.addClass('top')
        attrs.top = (trigger.offset().top - height) - 20
      else
        tooltip.addClass('bottom')
        attrs.top = trigger.offset().top + trigger.outerHeight() - 4
      tooltip.css attrs

    resettooltip = ->
      tooltip.text('').removeClass('left right top bottom').css
        left: 'auto'
        right: 'auto'
        top: 'auto'
        bottom: 'auto'
        width: 'auto'
        'padding-left': 'auto'
        'padding-right': 'auto'

    closetooltip = ->
      tooltip.stop().hide()
      resettooltip()
      $('[role=tooltip]').removeClass('on')

    showtooltip = (trigger) ->
      clearTimeout(delayShow)
      delayShow = setTimeout ->
        tooltip.css({"opacity": 0, "display": "block"}).text(trigger.attr('data-title'))
        setPosition(trigger)
        trigger.addClass('on')
        console.log(tooltip.css('display'))
        tooltip.animate
          top: "+=10"
          opacity: 1
        , options.speed
      , options.delay

    @each ->
      $this = $(this)
      $this.attr('role','tooltip').attr('data-title',$this.attr('title'))
      $this.removeAttr "title"
      
    
    $('body').on(
      'focus', '[role=tooltip]', ->
        showtooltip($(this))
    ).on(
      'blur', '[role=tooltip]', ->
        clearTimeout(delayShow)
        closetooltip()
    ).on(
      'mouseenter', '[role=tooltip]:not(input,select,textarea)', ->
        showtooltip($(this))
    ).on(
      'mouseleave', '[role=tooltip]:not(input,select,textarea)', ->
        clearTimeout(delayShow)
        closetooltip()
    )

    $(window).on
      scroll: ->
        trigger = $('[role=tooltip].on')
        if trigger.length
          setPosition(trigger)
          $('#tooltip').css
            top: "+=10"

) jQuery