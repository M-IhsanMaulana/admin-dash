// sidebar active if user click it
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top-side li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const gambarSide = document.getElementById('data-img');
const brandImage = document.getElementById('brand-data');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	gambarSide.classList.toggle('hide-image')
	brandImage.classList.toggle('brand-title-open')
})

/** Content Toggler **/
const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('page-active')
		})
		target.classList.add('page-active')
	})
})

// Resize and set icon search
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})


if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})

// Switch Mode light and dark mode
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

// Read name of image upload
const realFileBtn = document.getElementById("real-file")
const customBtn = document.getElementById('custom-button')
const customTxt = document.getElementById('custom-text')

customBtn.addEventListener("click", function() {
    realFileBtn.click()
})

realFileBtn.addEventListener("change", function() {
    if (realFileBtn.value) {
        customTxt.innerHTML = `<i class='bx bx-images' ></i> ` + realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML =  `<i class='bx bxs-camera' ></i> Open Your Camera`
    }
})

// Preview image before upload to website
const inputFile = document.getElementById('real-file')
const previewContainer = document.getElementById('imgPreview')
const previewImage = previewContainer.querySelector('.image-preview__image')
const previewText = previewContainer.querySelector('.image-preview__default-text')

inputFile.addEventListener("change", function() {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader()

		previewText.style.display = "none"
		previewImage.style.display = "block"

		reader.addEventListener("load", function() {
			previewImage.setAttribute("src", this.result)
		})

		reader.readAsDataURL(file)
	} else {
		previewText.style.display = null
		previewImage.style.display = null
		previewImage.setAttribute("src", "")
	}
})

//  Show date and time to Website

var date = new Date();
var year = date.getFullYear()
var month = date.getMonth()
var date = date.getDate()

switch (month) {
	case 0: month = "Januari"; break
	case 1: month = "Februari"; break
	case 2: month = "Maret"; break
	case 3: month = "April"; break
	case 4: month = "Mei"; break
	case 5: month = "Juni"; break
	case 6: month = "Juli"; break
	case 7: month = "Agustus"; break
	case 8: month = "September"; break
	case 9: month = "Oktober"; break
	case 10: month = "November"; break
	case 11: month = "Desember"; break
}

var datenow = 	date + " " + month + " " + year;
document.getElementById("date-now").innerHTML = datenow

function TimeNow() {
	var timedata = new Date()
	var hours = timedata.getHours()
	var minutes = timedata.getMinutes()
	var secconds = timedata.getSeconds()

	hours = (hours < 10) ? "0"+hours : hours;
	minutes = (minutes < 10) ? "0"+minutes : minutes;
	secconds = (secconds < 10) ? "0"+secconds : secconds;

	var time = hours + ":" + minutes + ":" + secconds;
	setTimeout(TimeNow, 1000)
	document.getElementById("time-now").innerText = time;
	document.getElementById("time-now").textContent = time;
}
// Starting Function Time
TimeNow()