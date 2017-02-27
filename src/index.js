'use strict';

/**
 * ��ʽ��ʱ��
 * @param {Data | String | Integer} [time] Date��������ܱ�Date���캯�����յĲ���
 * @param {String} [pattern = 'yyyy-mm-dd hh:ii:ss'] ��ʽ
 * @return {String} ��ʽ���Ժ��ʱ���ַ���
 */
function format(time, pattern) {
	let y, m, d, h, i, s;
	if (!pattern) {
		if (time) {
			pattern = time;
		} else {
			pattern = 'yyyy-mm-dd hh:ii:ss';
		}
		time = null;
	}
	if (!time) {
		time = new Date();
	} else if (!(time instanceof Date)) {
		time = new Date(time);
	}
	y = time.getFullYear();
	m = time.getMonth() + 1;
	d = time.getDate();
	h = time.getHours();
	i = time.getMinutes();
	s = time.getSeconds();
	m < 10 && (m = '0' + m);
	d < 10 && (d = '0' + d);
	h < 10 && (h = '0' + h);
	i < 10 && (i = '0' + i);
	s < 10 && (s = '0' + s);
	return pattern.replace('yyyy', y).replace('mm', m).replace('dd', d).replace('hh', h).replace('ii', i).replace('ss', s);
}

module.exports = {
	format: format
};


