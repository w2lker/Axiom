#Axiom Bootstrap Theme
##Live preview of current version
[live preview of Axiom Theme](http://pg.ruthenia.org.ua/axiom.html)
##Things done
###Typography
	<h1> Main header </h1>
	<h2> Secondary header </h2>
	<h3> Headline </h3>
	<h4> Small links </h4>
	<p> Bodycopy </p>
	<p class="quote"> Some quotes </p>* p or class = "Bodycopy"
###Buttons
* Blue button

		<button type="button" class="btn btn-neutral"> </button>

* Green button

		<button type="button" class="btn btn-add"> </button>
* Red button

		<button type="button" class="btn btn-remove"> </button>
* Disabled button

		<button type="button" class="btn btn-disabled"> </button>
		
###Labels
		<span class="label label-pink"></span>
		<span class="label label-orange"></span>
		<span class="label label-yellow"></span>
		<span class="label label-green"></span>
		<span class="label label-spring"></span>
		<span class="label label-aqua" ></span>
		<span class="label label-blue"></span>
		<span class="label label-purple"></span>
		<span class="label label-rose"></span>
> Warning: labels has no margin. Please, apply them manualy

###Inputs
* Simple input
		
		<input type="text" class="form-control" placeholder="">
* Textarea

		<textarea class="form-control" rows="" placeholder=""> </textarea>

###Dropdowns
		<div class="btn-group" role="group">
	    	<button type="button" class="btn btn-dropdown dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	      		Dropdown description
	      		<span class="caret"></span>
	    	</button>
	    	<ul class="dropdown-menu" role="menu">
	      		<li><a href="#">First Dropdown</a></li>
				<li><a href="#">Second Dropdown</a></li>
			</ul>
	    </div>	
###Alerts
* Succed alert

		<div class="alert alert-success alert-dismissible" role="alert">
	  		<button type="button" class="close" data-dismiss="alert">
		  		<span aria-hidden="true">&times;</span>
		  		<span class="sr-only"> 
		  			Close
		  		</span>
	  		</button>
	  		<span class="icon axiom-glyphicon axiomicon-ok" aria-hidden="true" style="font-size: 30pt;"></span> 
	  		Alert decription
		</div>
* Warning alert

		<div class="alert alert-warning alert-dismissible" role="alert">
	  		<button type="button" class="close" data-dismiss="alert">
				<span  aria-hidden="true">&times;</span>
	  			<span class="sr-only">Close</span>
	  		</button>
	  		<span class="icon axiom-glyphicon axiomicon-warning" aria-hidden="true" style="font-size: 30pt;"></span> 
	  		Alert decription
		</div>
* Danger alert

		<div class="alert alert-danger alert-dismissible" role="alert">
	  		<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	  		<span class="icon axiom-glyphicon axiomicon-non-ok" aria-hidden="true" style="font-size: 30pt;"></span></span>
			Alert description
		</div>
###Nav Menus

			<ul id="myTab" class="nav nav-tabs">
				<li class="active"><a data-toggle="tab" href="#firsttab">Firsttab</a></li>
				<li><a data-toggle="tab" href="#secondtab">Secondtab</a></li>
				<li class="disabled"><a data-toggle="tab" href="#tab3">Disabled tab</a></li>
			</ul>
		<div id="myTabContent" class="tab-content">
			<div id="firsttab" class="tab-pane fade active in">
				First tab content
			</div>
			<div id="secondtab" class="tab-pane fade">
				Second tab content
			</div>
			<div id="tab3" class="tab-pane fade disabled">
				Third tab content
			</div>
		</div>
		
###Gliphicons
Here might be some description. But I have no idea what could I print right here. All info about gliphs you can find in table on live-preview link

##Things is got to be fixed in next releases
1. Right pagging and margins in elements
2. Input-field on active: content doesn't change color like in design-file
3. Alert close button now bootstrap design
4. Caret in dropdowns has bootstrap design
5. After choosing dropdown element carpet disapper
6. Nav menu disable tab is active anyway

#Thanks for your attantion. Good luck
