const svg = [
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950125/logos/zigbee_nqd268.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950127/logos/zulip_xgf6gn.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950125/logos/zeplin_m0bqin.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950122/logos/yeoman_f2jrt2.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950121/logos/yarn_zx89rs.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950120/logos/xwiki_f46tcs.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950119/logos/x-ray-goggles_jyjyxm.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950118/logos/xplenty_fuqrm6.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950118/logos/xampp_s4sd3h.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950117/logos/wufoo_qcvqkn.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950118/logos/xero_dd8hti.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950115/logos/wix_rdg2cc.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950115/logos/wiredtree_sxbwhe.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950114/logos/wicket-icon_qmftiu.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950113/logos/whatwg_mmxdt5.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950111/logos/webtorrent_oxseb0.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950111/logos/webrtc_davrwe.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950111/logos/webplatform_nyss5c.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950109/logos/webpack_fpard0.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950111/logos/webrtc_davrwe.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950111/logos/webplatform_nyss5c.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950109/logos/webhooks_h3dqwh.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950107/logos/weave_kzwghb.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950107/logos/watchman_h9r2bd.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950105/logos/w3c_wqpk9h.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950103/logos/void_re8x1c.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950102/logos/visual-studio-code_impe5b.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950103/logos/vlang_ujbg0j.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950102/logos/visual-studio_npepia.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950102/logos/visual_website_optimizer_zcpl5z.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950100/logos/victorops_nqh5md.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950098/logos/vagrant_wi70pq.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950097/logos/v8-ignition_hnwd3m.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950095/logos/upcase_fbao2c.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950095/logos/unito_yifscg.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950094/logos/undertow_imb5by.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950094/logos/undertow_imb5by.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950092/logos/typo3_xskuxx.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950089/logos/tux_se8lcj.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950087/logos/trello_yy6unf.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950084/logos/torus_jiqj7r.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950084/logos/tor_szarsc.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950084/logos/todomvc_xn48wq.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950084/logos/tomcat_scvtu7.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950083/logos/todoist-icon_pfjrk2.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950082/logos/titon_ry4isg.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950082/logos/testmunk_blur0r.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950080/logos/tensorflow_kwxyjq.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950080/logos/tectonic_i4ljea.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950079/logos/teamwork-icon_vx7fnn.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950079/logos/tealium_kgptei.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950078/logos/targetprocess_l8k6z6.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950077/logos/taiga_thfnqc.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950075/logos/swagger_pa0qxd.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950075/logos/swift_cwbnzr.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950074/logos/svg_cl4vjk.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950074/logos/svelte-icon_dcbjb6.svg',
    'https://res.cloudinary.com/stratmachine/image/upload/v1609950072/logos/surge_vueqxd.svg',
    'http://s.cdpn.io/3/kiwi.svg'
]

module.exports = {
    svg
}