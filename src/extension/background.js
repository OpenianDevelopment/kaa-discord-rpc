var _0x1292 = [
	"data",
	"extraHeaders",
	"toLowerCase",
	"8576qoWFcn",
	"onBeforeRequest",
	"1700745LhUPRf",
	"requestHeaders",
	"https://kaa.menhera-chan.in/ad",
	"streamsb.net",
	"1330972ebsHaA",
	"46fDsfTH",
	"1vrGTVY",
	"blocking",
	"value",
	"referer",
	"log",
	"129KbCAtw",
	"initiator",
	"https://video.xx.fbcdn.net/*",
	"push",
	"gogo-play.net",
	"7OdFytJ",
	"server01.streamhd.cc",
	"onstunkyr.com",
	"8047okhIMm",
	"www.yourupload.com",
	"vidstreaming.io",
	"addListener",
	"cloud9.to",
	"onBeforeSendHeaders",
	"744836drjsYF",
	"https://scontent-frx5-1.cdninstagram.com/",
	"189554uJtiQl",
	"name",
	"fcdn.stream",
	"split",
	"498627jjwkME",
];
(function (_0x4f2e9b, _0x2cac15) {
	var _0x4ae157 = _0x262d;
	while (!![]) {
		try {
			var _0xdfee3f =
				-parseInt(_0x4ae157(0x1d3)) +
				-parseInt(_0x4ae157(0x1c0)) * -parseInt(_0x4ae157(0x1be)) +
				-parseInt(_0x4ae157(0x1bf)) * -parseInt(_0x4ae157(0x1cd)) +
				parseInt(_0x4ae157(0x1d9)) +
				-parseInt(_0x4ae157(0x1c5)) * parseInt(_0x4ae157(0x1b8)) +
				-parseInt(_0x4ae157(0x1d5)) * parseInt(_0x4ae157(0x1ca)) +
				parseInt(_0x4ae157(0x1ba));
			if (_0xdfee3f === _0x2cac15) break;
			else _0x4f2e9b["push"](_0x4f2e9b["shift"]());
		} catch (_0x41c50e) {
			_0x4f2e9b["push"](_0x4f2e9b["shift"]());
		}
	}
})(_0x1292, 0xb0638);
async function allinone() {
	var _0x3122e9 = _0x262d,
		_0x31f4ae = await axios["get"](_0x3122e9(0x1bc));
	chrome["webRequest"][_0x3122e9(0x1b9)][_0x3122e9(0x1d0)](
		(_0x4fcb02) => {
			var _0x5de376 = _0x3122e9;
			const _0x17d7e9 = (_0x4fcb02[_0x5de376(0x1c6)] || "")[_0x5de376(0x1d8)](
				"/",
				0x3
			)[0x2];
			console[_0x5de376(0x1c4)](_0x17d7e9);
			if (
				_0x17d7e9 === _0x5de376(0x1cf) ||
				_0x17d7e9 === "www.mp4upload.com" ||
				_0x17d7e9 === _0x5de376(0x1d1) ||
				_0x17d7e9 === "playhydrax.com" ||
				_0x17d7e9 === _0x5de376(0x1ce) ||
				_0x17d7e9 === _0x5de376(0x1cc) ||
				_0x17d7e9 === "gogo-stream.com" ||
				_0x17d7e9 === _0x5de376(0x1d7) ||
				_0x17d7e9 === _0x5de376(0x1c9) ||
				_0x17d7e9 === _0x5de376(0x1bd) ||
				_0x17d7e9 === _0x5de376(0x1cb)
			)
				return { cancel: !![] };
		},
		{ urls: _0x31f4ae[_0x3122e9(0x1da)] },
		[_0x3122e9(0x1c1)]
	),
		chrome["webRequest"][_0x3122e9(0x1d2)][_0x3122e9(0x1d0)](
			function (_0x44bf6b) {
				var _0x46b187 = _0x3122e9,
					_0x2559a6 = _0x46b187(0x1d4),
					_0x510a26 = ![];
				for (var _0x40148b in _0x44bf6b["requestHeaders"]) {
					_0x510a26 =
						_0x44bf6b[_0x46b187(0x1bb)][_0x40148b][_0x46b187(0x1d6)][
							_0x46b187(0x1dc)
						]() == _0x46b187(0x1c3);
					if (_0x510a26) {
						_0x44bf6b["requestHeaders"][_0x40148b][_0x46b187(0x1c2)] =
							_0x2559a6;
						break;
					}
				}
				return (
					!_0x510a26 &&
						_0x44bf6b[_0x46b187(0x1bb)][_0x46b187(0x1c8)]({
							name: "Referer",
							value: _0x2559a6,
						}),
					{ requestHeaders: _0x44bf6b["requestHeaders"] }
				);
			},
			{ urls: [_0x3122e9(0x1c7)] },
			[_0x3122e9(0x1bb), "blocking", _0x3122e9(0x1db)]
		);
}
function _0x262d(_0x3ef16b, _0x1ecc51) {
	_0x3ef16b = _0x3ef16b - 0x1b8;
	var _0x12922b = _0x1292[_0x3ef16b];
	return _0x12922b;
}
allinone();
