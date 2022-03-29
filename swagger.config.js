/* 此文件根据swagger自动生成，生成后执行bs api自动生成对应请求方法 */
module.exports = {
  apiAndMock: {
    config: {
      autoSwaggerApi: {
        algo_manager_create: {
          url: '/dip/algo_manager/create',
          method: 'post'
        },
        algo_manager_delete: {
          url: '/dip/algo_manager/delete',
          method: 'get'
        },
        algo_manager_delete_diag_batch: {
          url: '/dip/algo_manager/delete_diag_batch',
          method: 'get'
        },
        algo_manager_get_diag_list: {
          url: '/dip/algo_manager/get_diag_list',
          method: 'post'
        },
        algo_manager_get_list: {
          url: '/dip/algo_manager/get_list',
          method: 'post'
        },
        algo_manager_get_online_list: {
          url: '/dip/algo_manager/get_online_list',
          method: 'post'
        },
        algo_manager_run: {
          url: '/dip/algo_manager/run',
          method: 'get'
        },
        price_batch_offline_fail_log: {
          url: '/dip/price_batch/offline_fail_log',
          method: 'post'
        },
        price_batch_offline_task: {
          url: '/dip/price_batch/offline_task',
          method: 'post'
        },
        price_batch_offline_task_info: {
          url: '/dip/price_batch/offline_task_info',
          method: 'post'
        },
        price_batch_online_fail_log: {
          url: '/dip/price_batch/online_fail_log',
          method: 'post'
        },
        price_batch_online_task: {
          url: '/dip/price_batch/online_task',
          method: 'post'
        },
        price_batch_online_task_info: {
          url: '/dip/price_batch/online_task_info',
          method: 'post'
        },
        price_batch_opt_fail_log: {
          url: '/dip/price_batch/opt_fail_log',
          method: 'post'
        },
        price_batch_opt_task: {
          url: '/dip/price_batch/opt_task',
          method: 'post'
        },
        price_batch_opt_task_info: {
          url: '/dip/price_batch/opt_task_info',
          method: 'post'
        },
        price_batch_rollback_fail_log: {
          url: '/dip/price_batch/rollback_fail_log',
          method: 'post'
        },
        price_batch_rollback_task: {
          url: '/dip/price_batch/rollback_task',
          method: 'post'
        },
        price_batch_rollback_task_info: {
          url: '/dip/price_batch/rollback_task_info',
          method: 'post'
        },
        city_overview_get_adjust_type: {
          url: '/dip/city_overview/get_adjust_type',
          method: 'get'
        },
        city_overview_get_big_area_and_city: {
          url: '/dip/city_overview/get_big_area_and_city',
          method: 'get'
        },
        city_overview_get_od_city_overview: {
          url: '/dip/city_overview/get_od_city_overview',
          method: 'post'
        },
        city_overview_get_od_city_overview_indicators: {
          url: '/dip/city_overview/get_od_city_overview_indicators',
          method: 'get'
        },
        city_overview_get_od_monthly_report: {
          url: '/dip/city_overview/get_od_monthly_report',
          method: 'post'
        },
        city_overview_get_od_monthly_report_indicators: {
          url: '/dip/city_overview/get_od_monthly_report_indicators',
          method: 'get'
        },
        city_overview_get_supply_and_demand: {
          url: '/dip/city_overview/get_supply_and_demand',
          method: 'post'
        },
        city_overview_get_supply_and_demand_indicators: {
          url: '/dip/city_overview/get_supply_and_demand_indicators',
          method: 'get'
        },
        diag_batch_delete_batch: {
          url: '/dip/diag_batch/delete_batch',
          method: 'post'
        },
        diag_batch_get_batch_ui_ids: {
          url: '/dip/diag_batch/get_batch_ui_ids',
          method: 'post'
        },
        diag_batch_list_batches: {
          url: '/dip/diag_batch/list_batches',
          method: 'post'
        },
        diag_batch_update_batch_terminal: {
          url: '/dip/diag_batch/update_batch_terminal',
          method: 'post'
        },
        price_config_add: {
          url: '/dip/price_config/add',
          method: 'post'
        },
        price_config_delete: {
          url: '/dip/price_config/delete',
          method: 'post'
        },
        price_config_export_city_configs: {
          url: '/dip/price_config/export_city_configs',
          method: 'post'
        },
        price_config_log: {
          url: '/dip/price_config/log',
          method: 'post'
        },
        price_config_select: {
          url: '/dip/price_config/select',
          method: 'post'
        },
        price_config_update_info: {
          url: '/dip/price_config/update_info',
          method: 'post'
        },
        price_config_update_status: {
          url: '/dip/price_config/update_status',
          method: 'post'
        },
        get_category_city: {
          url: '/dip/get_category_city',
          method: 'get'
        },
        get_pre_condition_columns: {
          url: '/dip/get_pre_condition_columns',
          method: 'post'
        },
        get_sample_columns: {
          url: '/dip/get_sample_columns',
          method: 'post'
        },
        list_car_detail_type: {
          url: '/dip/list_car_detail_type',
          method: 'post'
        },
        list_car_type: {
          url: '/dip/list_car_type',
          method: 'get'
        },
        list_car_vehicle_id: {
          url: '/dip/list_car_vehicle_id',
          method: 'get'
        },
        list_free_grid_level: {
          url: '/dip/list_free_grid_level',
          method: 'post'
        },
        list_free_grid_level_all: {
          url: '/dip/list_free_grid_level_all',
          method: 'get'
        },
        list_free_grid_level_version: {
          url: '/dip/list_free_grid_level_version',
          method: 'get'
        },
        list_grid_level: {
          url: '/dip/list_grid_level',
          method: 'get'
        },
        list_indicators: {
          url: '/dip/list_indicators',
          method: 'get'
        },
        unlock_gen_lock: {
          url: '/dip/unlock_gen_lock',
          method: 'post'
        },
        upload_file: {
          url: '/dip/upload_file',
          method: 'post'
        },
        batch_get_fail_detail: {
          url: '/dip/batch/get_fail_detail',
          method: 'get'
        },
        batch_get_template: {
          url: '/dip/batch/get_template',
          method: 'get'
        },
        batch_import: {
          url: '/dip/batch/import',
          method: 'post'
        },
        batch_list_import_records: {
          url: '/dip/batch/list_import_records',
          method: 'post'
        },
        distance_get_fail_detail: {
          url: '/dip/distance/get_fail_detail',
          method: 'get'
        },
        distance_get_template: {
          url: '/dip/distance/get_template',
          method: 'get'
        },
        distance_import: {
          url: '/dip/distance/import',
          method: 'post'
        },
        distance_list_import_records: {
          url: '/dip/distance/list_import_records',
          method: 'post'
        },
        import_offline_get_fail_detail: {
          url: '/dip/import_offline/get_fail_detail',
          method: 'get'
        },
        import_offline_get_template: {
          url: '/dip/import_offline/get_template',
          method: 'get'
        },
        import_offline_import: {
          url: '/dip/import_offline/import',
          method: 'post'
        },
        import_offline_list_batch_records: {
          url: '/dip/import_offline/list_batch_records',
          method: 'post'
        },
        import_offline_list_import_records: {
          url: '/dip/import_offline/list_import_records',
          method: 'post'
        },
        import_offline_offline: {
          url: '/dip/import_offline/offline',
          method: 'post'
        },
        delete_label: {
          url: '/dip/delete_label',
          method: 'post'
        },
        list_labels: {
          url: '/dip/list_labels',
          method: 'get'
        },
        update_labels: {
          url: '/dip/update_labels',
          method: 'post'
        },
        notification_create_config: {
          url: '/dip/notification/create_config',
          method: 'post'
        },
        notification_create_configs: {
          url: '/dip/notification/create_configs',
          method: 'post'
        },
        notification_delete_config: {
          url: '/dip/notification/delete_config',
          method: 'post'
        },
        notification_get_notifiers_template: {
          url: '/dip/notification/get_notifiers_template',
          method: 'get'
        },
        notification_list_chat: {
          url: '/dip/notification/list_chat',
          method: 'post'
        },
        notification_list_config_cities: {
          url: '/dip/notification/list_config_cities',
          method: 'post'
        },
        notification_list_configs: {
          url: '/dip/notification/list_configs',
          method: 'post'
        },
        notification_list_notice_settings: {
          url: '/dip/notification/list_notice_settings',
          method: 'get'
        },
        notification_notifiers_import: {
          url: '/dip/notification/notifiers_import',
          method: 'post'
        },
        notification_query_config: {
          url: '/dip/notification/query_config',
          method: 'post'
        },
        notification_update_config: {
          url: '/dip/notification/update_config',
          method: 'post'
        },
        notification_update_notice_settings: {
          url: '/dip/notification/update_notice_settings',
          method: 'post'
        },
        optimize_batch_optimize: {
          url: '/dip/optimize/batch_optimize',
          method: 'post'
        },
        optimize_clear_todo: {
          url: '/dip/optimize/clear_todo',
          method: 'get'
        },
        optimize_list_all: {
          url: '/dip/optimize/list_all',
          method: 'post'
        },
        optimize_list_logs: {
          url: '/dip/optimize/list_logs',
          method: 'get'
        },
        optimize_list_logs_todo: {
          url: '/dip/optimize/list_logs_todo',
          method: 'get'
        },
        select_pool_create: {
          url: '/dip/select_pool/create',
          method: 'post'
        },
        select_pool_delete: {
          url: '/dip/select_pool/delete',
          method: 'post'
        },
        select_pool_list: {
          url: '/dip/select_pool/list',
          method: 'post'
        },
        select_pool_update: {
          url: '/dip/select_pool/update',
          method: 'post'
        },
        diag_strategy_create_rule: {
          url: '/dip/diag_strategy/create_rule',
          method: 'post'
        },
        diag_strategy_delete_rule: {
          url: '/dip/diag_strategy/delete_rule',
          method: 'post'
        },
        diag_strategy_get_rule: {
          url: '/dip/diag_strategy/get_rule',
          method: 'get'
        },
        diag_strategy_list_rule_labels: {
          url: '/dip/diag_strategy/list_rule_labels',
          method: 'post'
        },
        diag_strategy_search_strategy: {
          url: '/dip/diag_strategy/search_strategy',
          method: 'post'
        },
        diag_strategy_search_strategy_name: {
          url: '/dip/diag_strategy/search_strategy_name',
          method: 'post'
        },
        diag_strategy_update_rule: {
          url: '/dip/diag_strategy/update_rule',
          method: 'post'
        },
        strategy_create_strategy_draft: {
          url: '/dip/strategy/create_strategy_draft',
          method: 'post'
        },
        strategy_create_strategy_rule_copy: {
          url: '/dip/strategy/create_strategy_rule_copy',
          method: 'post'
        },
        strategy_delete_strategy: {
          url: '/dip/strategy/delete_strategy',
          method: 'post'
        },
        strategy_delete_strategy_schedule: {
          url: '/dip/strategy/delete_strategy_schedule',
          method: 'post'
        },
        strategy_get_batch_slicing_cfg: {
          url: '/dip/strategy/get_batch_slicing_cfg',
          method: 'get'
        },
        strategy_get_price_status: {
          url: '/dip/strategy/get_price_status',
          method: 'post'
        },
        strategy_get_strategy: {
          url: '/dip/strategy/get_strategy',
          method: 'get'
        },
        strategy_get_strategy_detail: {
          url: '/dip/strategy/get_strategy_detail',
          method: 'post'
        },
        strategy_get_strategy_schedule: {
          url: '/dip/strategy/get_strategy_schedule',
          method: 'post'
        },
        strategy_list_rules_reverse: {
          url: '/dip/strategy/list_rules_reverse',
          method: 'get'
        },
        strategy_list_strategies: {
          url: '/dip/strategy/list_strategies',
          method: 'get'
        },
        strategy_list_strategy_refresh: {
          url: '/dip/strategy/list_strategy_refresh',
          method: 'post'
        },
        strategy_list_strategy_statistic: {
          url: '/dip/strategy/list_strategy_statistic',
          method: 'post'
        },
        strategy_run_strategy: {
          url: '/dip/strategy/run_strategy',
          method: 'post'
        },
        strategy_save_batch_slicing_cfg: {
          url: '/dip/strategy/save_batch_slicing_cfg',
          method: 'post'
        },
        strategy_save_strategy_schedule: {
          url: '/dip/strategy/save_strategy_schedule',
          method: 'post'
        },
        strategy_update_strategy: {
          url: '/dip/strategy/update_strategy',
          method: 'post'
        },
        strategy_update_strategy_bind: {
          url: '/dip/strategy/update_strategy_bind',
          method: 'post'
        },
        strategy_update_strategy_release: {
          url: '/dip/strategy/update_strategy_release',
          method: 'post'
        },
        urgent_offline_create_opt_batch: {
          url: '/dip/urgent_offline/create_opt_batch',
          method: 'post'
        },
        urgent_offline_delete_batches_to_be_optimized: {
          url: '/dip/urgent_offline/delete_batches_to_be_optimized',
          method: 'post'
        },
        urgent_offline_get_retrieve_status: {
          url: '/dip/urgent_offline/get_retrieve_status',
          method: 'get'
        },
        urgent_offline_list_batch_records: {
          url: '/dip/urgent_offline/list_batch_records',
          method: 'post'
        },
        urgent_offline_list_be_online_batch_ids: {
          url: '/dip/urgent_offline/list_be_online_batch_ids',
          method: 'get'
        },
        urgent_offline_list_relevant_batches: {
          url: '/dip/urgent_offline/list_relevant_batches',
          method: 'post'
        },
        urgent_offline_update_param_offline: {
          url: '/dip/urgent_offline/update_param_offline',
          method: 'post'
        },
        batch_list_effect_scope: {
          url: '/dip/batch/list_effect_scope',
          method: 'post'
        },
        batch_refresh_effect_scope: {
          url: '/dip/batch/refresh_effect_scope',
          method: 'post'
        },
        grid_start_sync: {
          url: '/dip/grid/start_sync',
          method: 'post'
        },
        market_city_view: {
          url: '/dip/market/city_view',
          method: 'post'
        },
        market_price_view: {
          url: '/dip/market/price_view',
          method: 'post'
        },
        pu_config_delete_distance_setting: {
          url: '/dip/pu_config/delete_distance_setting',
          method: 'post'
        },
        pu_config_get_price_batches: {
          url: '/dip/pu_config/get_price_batches',
          method: 'post'
        },
        pu_config_list_distance_setting: {
          url: '/dip/pu_config/list_distance_setting',
          method: 'post'
        },
        pu_config_list_price_units: {
          url: '/dip/pu_config/list_price_units',
          method: 'post'
        },
        pu_config_offline_price_unit: {
          url: '/dip/pu_config/offline_price_unit',
          method: 'post'
        },
        pu_config_update_distance_setting: {
          url: '/dip/pu_config/update_distance_setting',
          method: 'post'
        },
        pu_diag_generate_online_batch: {
          url: '/dip/pu_diag/generate_online_batch',
          method: 'post'
        },
        pu_diag_generate_online_batch_query: {
          url: '/dip/pu_diag/generate_online_batch/query',
          method: 'post'
        },
        pu_diag_generate_online_batch_v2: {
          url: '/dip/pu_diag/generate_online_batch/v2',
          method: 'post'
        },
        pu_diag_generate_online_batches: {
          url: '/dip/pu_diag/generate_online_batches',
          method: 'post'
        },
        pu_diag_get_od_features: {
          url: '/dip/pu_diag/get_od_features',
          method: 'get'
        },
        pu_diag_get_od_weight: {
          url: '/dip/pu_diag/get_od_weight',
          method: 'get'
        },
        pu_diag_get_price_log: {
          url: '/dip/pu_diag/get_price_log',
          method: 'post'
        },
        pu_diag_get_statistics: {
          url: '/dip/pu_diag/get_statistics',
          method: 'post'
        },
        pu_diag_list_price_units: {
          url: '/dip/pu_diag/list_price_units',
          method: 'post'
        },
        pu_diag_save_od_weight: {
          url: '/dip/pu_diag/save_od_weight',
          method: 'post'
        },
        pu_diag_update_price_unit: {
          url: '/dip/pu_diag/update_price_unit',
          method: 'post'
        },
        pu_online_generate_optimize_batch: {
          url: '/dip/pu_online/generate_optimize_batch',
          method: 'post'
        },
        pu_online_generate_optimize_batch_all: {
          url: '/dip/pu_online/generate_optimize_batch_all',
          method: 'post'
        },
        pu_online_list_price_units: {
          url: '/dip/pu_online/list_price_units',
          method: 'post'
        },
        online_batch_delete_online_batch: {
          url: '/dip/online_batch/delete_online_batch',
          method: 'post'
        },
        online_batch_delete_online_batch_su: {
          url: '/dip/online_batch/delete_online_batch_su',
          method: 'post'
        },
        online_batch_get_batch_ui_ids: {
          url: '/dip/online_batch/get_batch_ui_ids',
          method: 'post'
        },
        online_batch_list_online_batches: {
          url: '/dip/online_batch/list_online_batches',
          method: 'post'
        },
        online_batch_search_online_batch_ui_id: {
          url: '/dip/online_batch/search_online_batch_ui_id',
          method: 'post'
        },
        online_batch_update_online_batch: {
          url: '/dip/online_batch/update_online_batch',
          method: 'post'
        },
        pricing_log_get_current_pricing_detail: {
          url: '/dip/pricing_log/get_current_pricing_detail',
          method: 'post'
        },
        pricing_log_list: {
          url: '/dip/pricing_log/list',
          method: 'post'
        },
        review_list_cities: {
          url: '/dip/review/list_cities',
          method: 'post'
        },
        review_list_reports_detail: {
          url: '/dip/review/list_reports_detail',
          method: 'post'
        },
        review_start_review: {
          url: '/dip/review/start_review',
          method: 'post'
        },
        sample_check_del_sample: {
          url: '/dip/sample_check/del_sample',
          method: 'post'
        },
        sample_check_download: {
          url: '/dip/sample_check/download',
          method: 'get'
        },
        sample_check_gen_sample: {
          url: '/dip/sample_check/gen_sample',
          method: 'post'
        },
        sample_check_list_samples: {
          url: '/dip/sample_check/list_samples',
          method: 'post'
        },
        shunt_test_check_name_valid: {
          url: '/dip/shunt_test/check_name_valid',
          method: 'get'
        },
        shunt_test_create: {
          url: '/dip/shunt_test/create',
          method: 'post'
        },
        shunt_test_delete: {
          url: '/dip/shunt_test/delete',
          method: 'get'
        },
        shunt_test_export_excel: {
          url: '/dip/shunt_test/export_excel',
          method: 'get'
        },
        shunt_test_generate: {
          url: '/dip/shunt_test/generate',
          method: 'get'
        },
        shunt_test_get_apply_batch: {
          url: '/dip/shunt_test/get_apply_batch',
          method: 'post'
        },
        shunt_test_get_diagnose_batch_list: {
          url: '/dip/shunt_test/get_diagnose_batch_list',
          method: 'get'
        },
        shunt_test_get_list: {
          url: '/dip/shunt_test/get_list',
          method: 'post'
        },
        shunt_test_get_strategy_id_list: {
          url: '/dip/shunt_test/get_strategy_id_list',
          method: 'get'
        },
        shunt_test_online: {
          url: '/dip/shunt_test/online',
          method: 'get'
        },
        shunt_test_preview: {
          url: '/dip/shunt_test/preview',
          method: 'post'
        },
        shunt_test_preview_summary: {
          url: '/dip/shunt_test/preview_summary',
          method: 'get'
        },
        shunt_test_run: {
          url: '/dip/shunt_test/run',
          method: 'get'
        },
      }
    }
  }
}