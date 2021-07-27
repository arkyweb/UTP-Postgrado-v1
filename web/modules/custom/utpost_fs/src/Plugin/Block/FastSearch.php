<?php

namespace Drupal\utpost_fs\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'My Template' block.
 *
 * @Block(
 *   id = "utpost_fs",
 *   admin_label = @Translation("Fast Search")
 * )
 */
class FastSearch extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return ['label_display' => FALSE];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $renderable = [
      '#theme' => 'utpost_fs',
      '#test_var' => 'test variable',
    ];

    return $renderable;
  }

}
