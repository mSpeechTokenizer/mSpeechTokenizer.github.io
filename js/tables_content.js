var sample_ids = [1,2,3];

// var cloning_table_html;
// sample_ids.forEach(function(id){
// 	cloning_table_html += '\
// 		<tr>\
// 			<td style="width: 20px">' + id + '</td> \
// 		    <td><audio controls=""><source src="resources/audio/speaker_scoring/' + id + '_prompt.wav"></audio></td> \
// 		    <td><audio controls=""><source src="resources/audio/speaker_scoring/' + id + '_yourtts.wav"></audio></td> \
// 		    <td><audio controls=""><source src="resources/audio/speaker_scoring/' + id + '_valle.wav"></audio></td> \
// 		    <td><audio controls=""><source src="resources/audio/speaker_scoring/' + id + '_pitchflow_32x1.wav"></audio></td> \
// 		    <td><audio controls=""><source src="resources/audio/speaker_scoring/' + id + '_pitchflow_32x8.wav"></audio></td> \
// 	    </tr>';
// });
// $('.speaker_scoring_audios').html(cloning_table_html);

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

var langs_group = {
	'en_zh_de': ['English', 'Chinese', 'German'],
	'ru_it_fr': ['Russian', 'Italian', 'French'],
    'es_pl_pt_nl': ['Spanish', 'Polish', 'Portuguese', 'Dutch']
};
var initial_langs = ['English', 'Chinese', 'German'];
var lang_to_short_map = {
	'English': 'en',
    'Chinese': 'zh',
    'Russian': 'ru',
    'Spanish': 'es',
    'German': 'de',
    'French': 'fr',
    'Italian': 'it',
    'Dutch': 'nl',
    'Portuguese': 'pt',
    'Polish': 'pl'
};
var orig_ext = {
	'English': 'flac',
    'Chinese': 'wav',
    'Russian': 'wav',
    'Spanish': 'flac',
    'German': 'flac',
    'French': 'flac',
    'Italian': 'flac',
    'Dutch': 'flac',
    'Portuguese': 'flac',
    'Polish': 'flac'
};

// var source = ['0015_surprise', '0016_sad', '0016_surprise', '0018_angry', '0019_neutral']

$('.dropdown-menu.reconstruction li').click(function () {
	var target_langs = $(this).parents('.dropdown').find('input').val();
	console.log(target_langs)

	var reconstruction_html = ' \
		<table class="wrapper smaller_audio"> \
			<tbody style="margin-right: auto; text-align: center;">'

	langs_group[target_langs].forEach(function(target_lang){
		reconstruction_html += '<tr> \
					<td><b>' + target_lang + '</b></td> \
					</tr> \
					<tr> \
						<td></td> \
						<td><b>Original</b></td>\
						<td><b>Baseline 1 RVQ</b></td> \
						<td><b>Ours 1 RVQ </b></td> \
						<td><b>Baseline 8 RVQ</b></td> \
		                <td><b>Ours 8 RVQ</b></td> \
					</tr>'
		sample_ids.forEach(function(s){
			reconstruction_html += '\
				<tr> \
					<td>' + s + '</td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_base_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_ours_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_base_full.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_ours_full.wav"></audio></td> \
				</tr>'
			});

	});
	
	

	reconstruction_html += '<tr><td><br></td></tr> \
				   			</tbody></table>';
	$('.reconstrunction').html(reconstruction_html + '</div>');
});

var dropdown_initial_reconstruction = '<table class="wrapper smaller_audio"> <tbody> \
 	<table class="wrapper smaller_audio"> \
			<tbody style="margin-right: auto; text-align: center;">'
initial_langs.forEach(function(target_lang){
		dropdown_initial_reconstruction += '<tr> \
					<td><b>' + target_lang + '</b></td> \
					</tr> \
					<tr> \
						<td></td> \
						<td><b>Original</b></td>\
						<td><b>Baseline 1 RVQ</b></td> \
						<td><b>Ours 1 RVQ </b></td> \
						<td><b>Baseline 8 RVQ</b></td> \
		                <td><b>Ours 8 RVQ</b></td> \
					</tr>'
		sample_ids.forEach(function(s){
			dropdown_initial_reconstruction += '\
				<tr> \
					<td>' + s + '</td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_base_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_ours_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_base_full.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/1/' + lang_to_short_map[target_lang] + '_' + s + '_ours_full.wav"></audio></td> \
				</tr>'
			});

});
dropdown_initial_reconstruction += '</tbody></table>'
$('.reconstrunction_replace').replaceWith(dropdown_initial_reconstruction);




// $('.dropdown-menu.conversion li').click(function () {
// 	var target_langs = $(this).parents('.dropdown').find('input').val();
// 	console.log(target_langs)

// 	var conversion_html = ' \
// 		<table class="wrapper smaller_audio"> \
// 			<tbody style="margin-right: auto; text-align: center;">'

// 	langs_group[target_langs].forEach(function(target_lang){
// 		conversion_html += '<tr> \
// 					<td><b>' + target_lang + '</b></td> \
// 					</tr> \
// 					<tr> \
// 						<td></td> \
// 						<td><b>Original</b></td>\
// 						<td><b>Reference</b></td>\
// 						<td><b>Ours 1 RVQ </b></td> \
// 					</tr>'
// 		sample_ids_conversion.forEach(function(s){
// 			conversion_html += '\
// 				<tr> \
// 					<td>' + s + '</td> \
// 					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
// 					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_ref_1.' + orig_ext[target_lang] + '"></audio></td> \
// 					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_gen_1.wav"></audio></td> \
// 				</tr>\
// 				<tr> \
// 					<td><br></td> \
// 					<td><br></td> \
// 					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_ref_2.' + orig_ext[target_lang] + '"></audio></td> \
// 					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_gen_2.wav"></audio></td> \
// 				</tr>'
// 			});

// 	});
	
	

// 	conversion_html += '<tr><td><br></td></tr> \
// 				   			</tbody></table>';
// 	$('.conversion_html').html(conversion_html + '</div>');
// });
var sample_ids_conversion = [1,2];
var initial_langs_conversion = ['English', 'Chinese'];
var conversion_html = '<table class="wrapper "> \
			<tbody style="margin-right: auto; text-align: center;">'


initial_langs_conversion.forEach(function(target_lang){
		conversion_html += '<tr> \
					<td><b>' + target_lang + '</b></td> \
					</tr> \
					<tr> \
						<td></td> \
						<td><b>Original</b></td>\
						<td><b>Reference</b></td>\
						<td><b>Ours 1 RVQ </b></td> \
					</tr>'
		sample_ids_conversion.forEach(function(s){
			conversion_html += '\
				<tr> \
					<td>' + s + '</td> \
					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_ref_1.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_gen_1.wav"></audio></td> \
				</tr>\
				<tr> \
					<td><br></td> \
					<td><br></td> \
					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_ref_2.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/2/' + lang_to_short_map[target_lang] + '_' + s + '_gen_2.wav"></audio></td> \
				</tr>'
			});
	});
conversion_html += '</tbody></table>'
$('.conversion_replace').replaceWith(conversion_html);


var sample_ids_ablation = [1,2, 3];
var initial_langs_ablation = ['English', 'Chinese'];
var ablation1_html = '<table class="wrapper smaller_audio"> \
			<tbody style="margin-right: auto; text-align: center;">'


initial_langs_ablation.forEach(function(target_lang){
		ablation1_html += '<tr> \
					<td><b>' + target_lang + '</b></td> \
					</tr> \
					<tr> \
						<td></td> \
						<td><b>Original</b></td>\
						<td><b>W/o LN 1 RVQ</b></td>\
						<td><b>With LN 1 RVQ</b></td> \
						<td><b>W/o LN 8 RVQ</b></td>\
						<td><b>With LN 8 RVQ</b></td> \
					</tr>'
		sample_ids_ablation.forEach(function(s){
			ablation1_html += '\
				<tr> \
					<td>' + s + '</td> \
					<td><audio controls=""><source src="resources/audio/3/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/3/' + lang_to_short_map[target_lang] + '_' + s + '_wonorm_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/3/' + lang_to_short_map[target_lang] + '_' + s + '_wnorm_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/3/' + lang_to_short_map[target_lang] + '_' + s + '_wonorm_full.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/3/' + lang_to_short_map[target_lang] + '_' + s + '_wnorm_full.wav"></audio></td> \
				</tr>'
			});
	});
ablation1_html += '</tbody></table>'
$('.ablation_study_layer_norm_replace').replaceWith(ablation1_html);


var ablation2_html = '<table class="wrapper smaller_audio"> \
			<tbody style="margin-right: auto; text-align: center;">'
initial_langs_ablation.forEach(function(target_lang){
		ablation2_html += '<tr> \
					<td><b>' + target_lang + '</b></td> \
					</tr> \
					<tr> \
						<td></td> \
						<td><b>Original</b></td>\
						<td><b>Share 1 RVQ</b></td>\
						<td><b>Split 1 RVQ</b></td> \
						<td><b>Share 8 RVQ</b></td>\
						<td><b>Split 8 RVQ</b></td> \
					</tr>'
		sample_ids_ablation.forEach(function(s){
			ablation2_html += '\
				<tr> \
					<td>' + s + '</td> \
					<td><audio controls=""><source src="resources/audio/4/' + lang_to_short_map[target_lang] + '_' + s + '_orig.' + orig_ext[target_lang] + '"></audio></td> \
					<td><audio controls=""><source src="resources/audio/4/' + lang_to_short_map[target_lang] + '_' + s + '_share_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/4/' + lang_to_short_map[target_lang] + '_' + s + '_split_neut.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/4/' + lang_to_short_map[target_lang] + '_' + s + '_share_full.wav"></audio></td> \
					<td><audio controls=""><source src="resources/audio/4/' + lang_to_short_map[target_lang] + '_' + s + '_split_full.wav"></audio></td> \
				</tr>'
			});
	});
ablation2_html += '</tbody></table>'
$('.ablation_study_projection_replace').replaceWith(ablation2_html);



