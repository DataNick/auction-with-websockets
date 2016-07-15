class CreateAuctions < ActiveRecord::Migration
  def change
    create_table :auctions do |t|
      t.float :value
      t.references :product, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
