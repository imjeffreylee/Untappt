require 'test_helper'

class Api::DrinksControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_drinks_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_drinks_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_drinks_index_url
    assert_response :success
  end

  test "should get update" do
    get api_drinks_update_url
    assert_response :success
  end

  test "should get show" do
    get api_drinks_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_drinks_edit_url
    assert_response :success
  end

  test "should get new" do
    get api_drinks_new_url
    assert_response :success
  end

end
