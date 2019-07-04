import gql from 'graphql-tag';

const metricDetailFrag = {
  metricDetail: gql`
    fragment metricDetails on MetricDetailed {
      weight
      score
      description
      numericValue
    }
  `
};

const performanceAuditFrag = {
  audits: gql`
    fragment performanceAudits on PerformanceAudit {
      first_contentful_paint {
        ...metricDetails
      }
      first_meaningful_paint {
        ...metricDetails
      }
      speed_index {
        ...metricDetails
      }
      interactive {
        ...metricDetails
      }
      first_cpu_idle {
        ...metricDetails
      }
      max_potential_fid {
        ...metricDetails
      }
      estimated_input_latency {
        ...metricDetails
      }
      render_blocking_resources {
        ...metricDetails
      }
      uses_responsive_images {
        ...metricDetails
      }
      offscreen_images {
        ...metricDetails
      }
      unminified_css {
        ...metricDetails
      }
      unminified_javascript {
        ...metricDetails
      }
      unused_css_rules {
        ...metricDetails
      }
      uses_optimized_images {
        ...metricDetails
      }
      uses_webp_images {
        ...metricDetails
      }
      uses_text_compression {
        ...metricDetails
      }
      uses_rel_preconnect {
        ...metricDetails
      }
      time_to_first_byte {
        ...metricDetails
      }
      redirects {
        ...metricDetails
      }
      uses_rel_preload {
        ...metricDetails
      }
      efficient_animated_content {
        ...metricDetails
      }
      total_byte_weight {
        ...metricDetails
      }
      uses_long_cache_ttl {
        ...metricDetails
      }
      dom_size {
        ...metricDetails
      }
      user_timings {
        ...metricDetails
      }
      bootup_time {
        ...metricDetails
      }
      mainthread_work_breakdown {
        ...metricDetails
      }
      font_display {
        ...metricDetails
      }
      resource_summary {
        ...metricDetails
      }
      network_requests {
        ...metricDetails
      }
      network_rtt {
        ...metricDetails
      }
      network_server_latency {
        ...metricDetails
      }
      main_thread_tasks {
        ...metricDetails
      }
      diagnostics {
        ...metricDetails
      }
      metrics {
        ...metricDetails
      }
      score
    }
    ${metricDetailFrag.metricDetail}
  `
};

const accessibilityAuditFrag = {
  audits: gql`
    fragment accessibilityAudits on AccessibilityAudit {
      accesskeys {
        ...metricDetails
      }
      aria_allowed_attr {
        ...metricDetails
      }
      aria_required_attr {
        ...metricDetails
      }
      aria_required_children {
        ...metricDetails
      }
      aria_required_parent {
        ...metricDetails
      }
      aria_roles {
        ...metricDetails
      }
      aria_valid_attr_value {
        ...metricDetails
      }
      aria_valid_attr {
        ...metricDetails
      }
      audio_caption {
        ...metricDetails
      }
      button_name {
        ...metricDetails
      }
      bypass {
        ...metricDetails
      }
      color_contrast {
        ...metricDetails
      }
      definition_list {
        ...metricDetails
      }
      dlitem {
        ...metricDetails
      }
      document_title {
        ...metricDetails
      }
      duplicate_id {
        ...metricDetails
      }
      frame_title {
        ...metricDetails
      }
      html_has_lang {
        ...metricDetails
      }
      html_lang_valid {
        ...metricDetails
      }
      image_alt {
        ...metricDetails
      }
      input_image_alt {
        ...metricDetails
      }
      label {
        ...metricDetails
      }
      layout_table {
        ...metricDetails
      }
      link_name {
        ...metricDetails
      }
      list_ {
        ...metricDetails
      }
      listitem {
        ...metricDetails
      }
      meta_refresh {
        ...metricDetails
      }
      meta_viewport {
        ...metricDetails
      }
      object_alt {
        ...metricDetails
      }
      tabindex {
        ...metricDetails
      }
      td_headers_attr {
        ...metricDetails
      }
      th_has_data_cells {
        ...metricDetails
      }
      valid_lang {
        ...metricDetails
      }
      video_caption {
        ...metricDetails
      }
      video_description {
        ...metricDetails
      }
      logical_tab_order {
        ...metricDetails
      }
      focusable_controls {
        ...metricDetails
      }
      interactive_element_affordance {
        ...metricDetails
      }
      managed_focus {
        ...metricDetails
      }
      focus_traps {
        ...metricDetails
      }
      custom_controls_labels {
        ...metricDetails
      }
      custom_controls_roles {
        ...metricDetails
      }
      visual_order_follows_dom {
        ...metricDetails
      }
      offscreen_content_hidden {
        ...metricDetails
      }
      heading_levels {
        ...metricDetails
      }
      use_landmarks {
        ...metricDetails
      }
      score
    }
    ${metricDetailFrag.metricDetail}
  `
};

const bestPracticeAuditFrag = {
  audits: gql`
    fragment best_practicesAudits on BestPracticesAudit {
      appcache_manifest {
        ...metricDetails
      }
      is_on_https {
        ...metricDetails
      }
      uses_http2 {
        ...metricDetails
      }
      uses_passive_event_listeners {
        ...metricDetails
      }
      no_document_write {
        ...metricDetails
      }
      external_anchors_use_rel_noopener {
        ...metricDetails
      }
      geolocation_on_start {
        ...metricDetails
      }
      doctype {
        ...metricDetails
      }
      no_vulnerable_libraries {
        ...metricDetails
      }
      js_libraries {
        ...metricDetails
      }
      notification_on_start {
        ...metricDetails
      }
      deprecations {
        ...metricDetails
      }
      password_inputs_can_be_pasted_into {
        ...metricDetails
      }
      errors_in_console {
        ...metricDetails
      }
      image_aspect_ratio {
        ...metricDetails
      }
      score
    }
    ${metricDetailFrag.metricDetail}
  `
};
const pwaAuditFrag = {
  audits: gql`
    fragment pwaAudits on PWAAudit {
      load_fast_enough_for_pwa {
        ...metricDetails
      }
      works_offline {
        ...metricDetails
      }
      offline_start_url {
        ...metricDetails
      }
      is_on_https {
        ...metricDetails
      }
      service_worker {
        ...metricDetails
      }
      installable_manifest {
        ...metricDetails
      }
      redirects_http {
        ...metricDetails
      }
      splash_screen {
        ...metricDetails
      }
      themed_omnibox {
        ...metricDetails
      }
      content_width {
        ...metricDetails
      }
      viewport {
        ...metricDetails
      }
      without_javascript {
        ...metricDetails
      }
      apple_touch_icon {
        ...metricDetails
      }
      pwa_cross_browser {
        ...metricDetails
      }
      pwa_page_transitions {
        ...metricDetails
      }
      pwa_each_page_has_url {
        ...metricDetails
      }
      score
    }
    ${metricDetailFrag.metricDetail}
  `
};
const seoAuditFrag = {
  audits: gql`
    fragment seoAudits on SEOAudit {
      viewport {
        ...metricDetails
      }
      document_title {
        ...metricDetails
      }
      meta_description {
        ...metricDetails
      }
      http_status_code {
        ...metricDetails
      }
      link_text {
        ...metricDetails
      }
      is_crawlable {
        ...metricDetails
      }
      robots_txt {
        ...metricDetails
      }
      image_alt {
        ...metricDetails
      }
      hreflang {
        ...metricDetails
      }
      canonical {
        ...metricDetails
      }
      font_size {
        ...metricDetails
      }
      plugins {
        ...metricDetails
      }
      tap_targets {
        ...metricDetails
      }
      score
    }
    ${metricDetailFrag.metricDetail}
  `
};
export {
  performanceAuditFrag,
  accessibilityAuditFrag,
  bestPracticeAuditFrag,
  pwaAuditFrag,
  seoAuditFrag
};
