describe('test appli angular', function() {
  it('should set input value to 4', function() {
    browser.get('http://localhost:8000/app/');

    var orsStar = element.all(by.css('ors-star')).get(5); // 6ème widget
	var img = orsStar.all(by.css('img')).get(3); // 4ème étoile
	browser.sleep(2000);
	
	img.click();
		
	browser.sleep(2000);
	
	var input = element.all(by.css('input')).get(0); // 1er input
	expect(input.getAttribute('value')).toEqual('4');
	
	
  });
  
  it('should click on start and run ws calls', function() {
    browser.get('http://localhost:8000/app/');

    var btnProduit = element(by.linkText('Produits')); // Lien 'Produits'
	browser.sleep(2000);
	btnProduit.click();
	browser.sleep(2000);
	
	
	var btnStart = element(by.buttonText('Start'));
	browser.sleep(2000);
	btnStart.click();
	//browser.sleep(2000);
	
	var divS5 = element.all(by.tagName('div')).get(2); // 3ème div
	expect(divS5.getText()).toEqual('3 : s5 success');
	browser.sleep(2000);
	
	/*
	var input = element.all(by.css('input')).get(0); // 1er input
	expect(input.getAttribute('value')).toEqual('4');
	*/
	
  });
  
});
